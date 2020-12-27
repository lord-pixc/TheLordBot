module.exports = {
  nombre: "unbanmantenimiento",
  alias: [],
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR" )) return message.channel.send("no tienes permisos")
      if (!message.guild) return;
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {  
          member
            .unban({
              reason: 'Desiciones del staff',
            })
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