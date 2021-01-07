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
            message.guild.channels.cache.filter(m => m.type == "text").random().createInvite({
                maxAge: 1800, 
                maxUses: 1 
              }).then((invite) => {message.channel.send(invite)})
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"getinvit"** <@&795025257157230643>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
    }
}