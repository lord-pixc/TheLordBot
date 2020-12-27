/*const { MessageEmbed } = require("discord.js");
const admin = require('firebase-admin');
const nd = admin.firestore();
const package = require('../package.json')

module.exports = {
    nombre: "cry",
    alias: ["llora"],
    alias: ["llorar"],
    alias: ["cryes"],
    run: async (client, message, args) => {
        //obtenemos el gif de la base de datos
        const juego = args.join("").toLowerCase();
        const consulta = await bd.collection(`cry`)
        .whereField("random": isGreaterThanOrEqualTo: random).order(by: "random").limit(to, 1)
        //validar si existe
        if (!consulta.val()) return message.channel.send("")
        //crear el embed
        const embed = new MessageEmbed()            
            .setColor(0x0041EE)
            .setDescription(`${message.member}`, 'llora', user.username)
            .setImage(consulta.val().cry)
            .setAuthor(client.user.username, client.user.avatarURL())
            .setFooter(`TheLordBot ${package.version}`, client.user.avatarURL());
        message.channel.send(embed);
    }
}*/