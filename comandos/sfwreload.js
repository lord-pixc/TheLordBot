const {MessageEmbed} = require("discord.js");

module.exports = {
    nombre: "sfwreload",
    alias: ["reloadsfw"],
    uso: "",
    estado: "",
    ejemplo: "",
    categoria: "",
    descripcion: "",
    run: async (client, message, args) => {
        try {
            if(![""].includes(message.author.id)) return;
            require('../sfw').loadsfw(["cry", "clap", "hug"], client);
            message.channel.send("cargados");
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"sfwreload"** <@&795025257157230643>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
    }
}