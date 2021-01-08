const {MessageEmbed} = require("discord.js");
const admin = require('firebase-admin');
const bd = admin.firestore();
const package = require('../package.json')

module.exports = {
    nombre: "cry",
    alias: ["llora", "llorar", "cryes"],
    ejemplo: "{{prefix}}cry",
    uso: "{{prefix}}cry",
    categoria: "entretenimiento",
    descripcion: "lloras",
    estado: "Activo",
    run: async (client, message, args) => {
        try {
//obtenemos el array de cry
            const gifs = client.sfw.get("cry");
            //obtenemos un gif aleatorio
            const gif = gifs[Math.floor(Math.random() * gifs.length)];
            //crear el embed
            const embed = new MessageEmbed()
                .setColor(0x0041EE)//estalecemos el color
                .setDescription(`${message.member.nickname || message.member.username} llora`)//estalecemos la descripción
                .setImage(gif)//estalecemos el gif
                .setAuthor(client.user.username, client.user.avatarURL())//estalecemos el autor
                .setFooter(`TheLordBot ${package.version}`, client.user.avatarURL());//estalecemos el footer
            message.channel.send(embed);//se envia el embed
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"cry"** <@&795025257157230643>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
    }
}