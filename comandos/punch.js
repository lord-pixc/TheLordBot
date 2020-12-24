const { MessageEmbed } = require("discord.js");
const Zeew = require("zeew");
const sfw = new Zeew.sfw("fbd597f5557800e8912e4fb");
module.exports = {
    nombre: "punchmantenimiento",
    alias: ['puñetaso'],
    run: async (client, message, args) => {
        const user = message.mentions.users.first();
        if(!user) return message.channel.send('Necesita mencionar a alguien')
        if(user === message.author)return message.channel.send('No puedes abrazarte a ti mismo')
        let e = await sfw.punch();
        message.channel.send(e)
        console.log(await sfw.punch())
    }
}