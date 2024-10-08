module.exports = {
    nombre: "unbanmantenimiento",
    alias: [],
    estado: "",
    ejemplo: "",
    categoria: "",
    descripcion: "",
    run: async (client, message, args) => {
        try {
            if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("no tienes permisos")
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
                            message.reply('No puedo desbanearle');
                            
                            console.error(err);
                        });
                } else {
                    message.reply("No exixte tal persona");
                }
            } else {
                message.reply("Menciona a alguien para banear")
            }
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"unban"** <@&795025257157230643>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
    }
}