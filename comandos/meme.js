const melphiworker = require('melphiworker')

module.exports = {
    nombre: "meme",
    alias: ["memes"],
    run: async (client, message, args) => {
        let memes = await melphiworker.memes()
        message.channel.send({files: [ memes ]})
    }
}