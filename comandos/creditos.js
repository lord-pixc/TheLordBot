const {MessageEmbed} = require("discord.js");

module.exports = {
    nombre: "creditos",
    alias: ["credits"],
    ejemplo: "{{prefix}}creditos",
    categoria: "infomacion",
    descripcion: "Muestra los mis creadores",
    estado: "Activo",
    run: async (client, message, args) => {
        try {
            const embed = new MessageEmbed()
                .setColor(0x5E9DE4)
                .addField("Dueños", "LORDPIXC, Eli Maciel")
                .addField("Colaboradores", "Toastcode, Bug.exe")
                .setAuthor(client.user.username, client.user.avatarURL())
                .setFooter(`TheLordBot ${package.version}`, client.user.avatarURL());
            message.channel.send(embed);
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"creditos"** <@&795025257157230643>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
    }
}