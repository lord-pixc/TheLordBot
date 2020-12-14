
const {MessageEmbed} = require('discord.js')
const package = require('../package.json')

module.exports = {
    nombre: "avatar",
    alias: [],
    run: async (client, message, args) => {
        let user = message.mentions.users.first();
        if(!user) user = message.author;
        const embed = new MessageEmbed()
        .setImage(user.displayAvatarURL({ format: "png", dynamic: true, size: 4096}))
        .setTitle(user.username)
        .setDescription(`Avatar solicitado por ${message.member}`)
        .setFooter(`TheLordBot ${package.version}`, client.user.avatarURL());
        message.channel.send(embed)
    }
}