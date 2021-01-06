const melphiworker = require('melphiworker')

module.exports = {
    nombre: "meme",
    alias: ["memes"],
    ejemplo: "",
    categoria: "",
    descripcion: "",
    estado: "",
    run: async (client, message, args) => {
        try {
            let memes = await melphiworker.memes()
            message.channel.send({files: [memes]})
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"meme"** <@&795025257157230643>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
    }
}