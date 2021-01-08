const {MessageEmbed} = require("discord.js");

module.exports = {
    nombre: "invite",
    alias: ["invitar"],
    ejemplo: "",
    uso: "",
    categoria: "",
    descripcion: "",
    estado: "",
    run: async (client, message, args) => {
        try {
            message.channel.send("Puedes invitarme a tu server desde https://cutt.ly/2hUGlED ```Sin miedo al acortador```")
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"invite"** <@&795025257157230643>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
    }
}