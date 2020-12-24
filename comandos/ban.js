module.exports = {
    nombre: "banmantenimiento",
    alias: [],
    run: async (client, message, args) => {
        if (!message.guild) return;
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {  
            member
            .has(
              ('BAN_MEMBERS'),
             message.reply('No tienes permisos'),
            )
              .ban({
                reason: 'Desiciones del staff',
              })
              
              .then(() => {
                message.reply(`A sido baneado ${user.tag}`);
              })
              .catch(err => {
                message.reply('No puedo banearle');S
                console.error(err);
              });
          } else {
            message.reply("No exixte tal persona");
          }
        } else {
          message.reply("Menciona a alguien para banear")
        }
    }
}
