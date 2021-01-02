const { MessageEmbed } = require("discord.js");

module.exports = {
    nombre: "creditos",
    alias: ["credits"],
    run: async (client, message, args) => {
        try {
            const embed = new MessageEmbed()
                .setTitle("Comandos")
                .setColor(0x5E9DE4)
                .setDescription("Todos los comandos deben llevar el prefix 'th?'")
                .addField("Dueños", "LORDPIXC")
                .addField("Colaboradores", "Toastcode, Eli Maciel, Mr.Bug ")
                .setAuthor(client.user.username, client.user.avatarURL());
            message.channel.send(embed);
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"afiliados"** <@&795025257157230643>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
            
        }
}