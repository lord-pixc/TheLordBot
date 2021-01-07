const {MessageEmbed} = require("discord.js");

module.exports = {
    nombre: "getinvit",
    alias: [],
    ejemplo: "",
    categoria: "",
    descripcion: "",
    estado: "",
    run: async (client, message, args) => {
        try {
            if (!message.guild.mr.hasPermission("CREATE_INSTANT_INVITE")) return message.channel.send("no tengo permisos");
            const invitacion = (await client.guilds.cache.get(message.guild.id).fetchInvites()).first();
            message.channel.send(`https://discord.gg/${invitacion.code}`)
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"getinvit"** <@&795025257157230643>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
    }
}