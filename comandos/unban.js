module.exports = {
    nombre: "unban",
    alias: [],
    run: async (client, message, args) => {
        if (!message.guild) return;
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {

            member
              .unban()
              .then(() => {
                message.reply(`A sido unbaneado ${user.tag}`);
              })
          }
        }
    }
}
