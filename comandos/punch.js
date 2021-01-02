const {MessageEmbed} = require("discord.js");
const Zeew = require("zeew");
const sfw = new Zeew.sfw("fbd597f5557800e8912e4fb");
module.exports = {
    nombre: "punchmantenimiento",
    alias: ['puñetaso'],
    run: async (client, message, args) => {
        try {
            const user = message.mentions.users.first();
            if (!user) return message.channel.send('Necesita mencionar a alguien')
            if (user === message.author) return message.channel.send('No puedes abrazarte a ti mismo')
            let e = await sfw.punch();
            message.channel.send(e)
            console.log(await sfw.punch())
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"punch"** <@&795025257157230643>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
    }
}
