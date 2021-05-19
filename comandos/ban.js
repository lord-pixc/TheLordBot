module.exports = {
    nombre: "ban",
    alias: [],
    ejemplo: "",
    categoria: "util",
    descripcion: "",
    estado: "",
    run: async (client, message, args) => {
        try {
            
            if (!message.guild) return;
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                if (member) {
                    member
                        .ban({
                            reason: 'Desiciones del staff',
                        })

                        .then(() => {
                            message.reply(`A sido baneado ${user.tag}`);
                        })
                        .catch(err => {
                            message.reply('No puedo banearle');
                            console.error(err);
                        });
                } else {
                    message.reply("No exixte tal persona");
                }
            } else {
                message.reply("Menciona a alguien para banear");
            }
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"ban"** <@&795025257157230643>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
    }
}

