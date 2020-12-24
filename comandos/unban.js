module.exports = {
  nombre: "unbanmantenimiento",
  alias: [],
  run: async (client, message, args) => {
      if (!message.guild) return;
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {  
          member
            .ban({
              reason: 'Desiciones del staff',
            })
            .has(('BAN_MEMBERS'),
              message.reply('No tienes permisos')
            )
            .then(() => {
              message.reply(`A sido desbaneado ${user.tag}`);
            })
            .catch(err => {
              message.reply('No puedo desbanearle');S
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