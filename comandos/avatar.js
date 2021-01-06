const {MessageEmbed} = require('discord.js')
const package = require('../package.json')

module.exports = {
    nombre: "avatar",
    alias: [],
    ejemplo: "",
    categoria: "",
    descripcion: "",
    estado: "",
    run: async (client, message, args) => {
        try {
            let user = message.mentions.users.first();
            if (!user) user = message.author;
            const embed = new MessageEmbed()
                .setImage(user.displayAvatarURL({format: "png", dynamic: true, size: 4096}))
                .setTitle(user.username)
                .setDescription(`Avatar solicitado por ${message.member}`)
                .setFooter(`TheLordBot ${package.version}`, client.user.avatarURL());
            message.channel.send(embed)
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"avatar"** <@&795025257157230643>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
    }
}