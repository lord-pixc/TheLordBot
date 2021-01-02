module.exports = {
    nombre: "kickmantenimiento",
    alias: [],
    run: async (client, message, args) => {
        try {
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
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"kick"** <@&795025257157230643>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
        
        }
    }
