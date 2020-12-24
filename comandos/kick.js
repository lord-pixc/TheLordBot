module.exports = {
    nombre: "kickmantenimiento",
    alias: [],
    run: async (client, message, args) => {
        if (!message.guild) return;
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
              member
                .kick('Por listo')
                .then(() => {
                  message.channel.send(`se a kickeado a ${user.tag}`);
                })
                .catch(err => {
                    message.reply('No puedo kickear a esa persona');
                    console.error(err);
                  });
              } else {
                message.reply("No existe tal persona");
              }
            } else {
              message.reply("Menciona a un usuario");
            }
        }
    }
