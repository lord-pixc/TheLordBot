const { MessageEmbed } = require("discord.js");
const admin = require('firebase-admin');
const bd = admin.firestore();
const package = require('../package.json')

module.exports = {
    nombre: "hug",
    alias: ["abraza, abrazar, abrazo"],
    run: async (client, message, args) => {
        //obtenemos el array de hug
        const gifs = client.sfw.get("hug");
        //obtenemos un gif aleatorio
        const gif = gifs[Math.floor(Math.random() * gis.length)];
        //crear el embed
        const embed = new MessageEmbed()            
            .setColor(0x0041EE)//estalecemos el color
            .setDescription(`${message.member}`, 'abraza a', user.username)//estalecemos la descripción
            .setImage(gif)//estalecemos el gif
            .setAuthor(client.user.username, client.user.avatarURL())//estalecemos el autor
            .setFooter(`TheLordBot ${package.version}`, client.user.avatarURL());//estalecemos el footer
        message.channel.send(embed);//se envia el embed
    }
}