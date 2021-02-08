const {MessageEmbed} = require("discord.js");

module.exports = {
    nombre: "getinvit",
    alias: [],
    ejemplo: "",
    categoria: "util",
    descripcion: "",
    estado: "",
    run: async (client, message, args) => {
        try {
            let guild = client.guilds.cache.get(args[0])
            if(!guild) guild = message.guild;
            if(!guild.me.permissions.has("CREATE_INVITE")) return message.channel.send("No tengo permisos para crear invitaciones en: "+guild.name)
            let codigo = await guild.channels.cache.filter(m => m.type == "text").random().createInvite({
              maxAge: 1800, // maximum time for the invite, in milliseconds
              maxUses: 1 // maximum times it can be used
            })
            if(codigo === undefined) return message.channel.send("Ups, parece que ocurrió un error. Intenta nuevamente")
            message.channel.send(codigo)
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"getinvit"** <@&795025257157230643>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
    }
}