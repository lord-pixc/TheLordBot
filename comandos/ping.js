module.exports = {
    nombre: "ping",
    alias: [],
    ejemplo: "",
    categoria: "util",
    descripcion: "",
    estado: "",
    run: async (client, message, args) => {
        try {
            message.channel.send("pong!");
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"ping"** <@&795025257157230643>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
    }
}