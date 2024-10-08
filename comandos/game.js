const {MessageEmbed} = require("discord.js");
const admin = require('firebase-admin');
const db = admin.database();
const package = require('../package.json')

module.exports = {
    nombre: "game",
    alias: ["games", "juegos", "juego"],
    ejemplo: "{{prefix}}game minecraft",
    categoria: "informacion",
    descripcion: "Describe juegos",
    estado: "En desarrollo",
    run: async (client, message, args) => {
        try {
            //validar si ingresó un juego
            if (args.length == 0) return message.channel.send("Escribe el juego que desees buscar, Ejemplo `tl!game <NOMBRE DEL JUEGO>`")
            //obtenemos el juego de la base de datos
            const juego = args.join("").toLowerCase();
            const consulta = await db.ref(`Juegos/${juego}`).once('value');
            //validar si existe
            if (!consulta.val()) return message.channel.send("De momento este juego no esta en la base de datos, puedes sugerirlos")
            //crear el embed
            const embed = new MessageEmbed()
                .setTitle(consulta.val().nombre)
                .setColor(0x0041EE)
                .setDescription(consulta.val().descripcion)
                .addField("Desarrollado", consulta.val().desarrolladora, true)
                .addField("Plataformas", consulta.val().plataforma, true)
                .addField("Fecha", consulta.val().fecha, true)
                .addField("Subido por", consulta.val().usuario?.nombre?? "el sistema", true)
                .setThumbnail(consulta.val().imagen)
                .setImage(consulta.val().captura)
                .setAuthor(client.user.username, client.user.avatarURL())
                .setFooter(`TheLordBot ${package.version}`, client.user.avatarURL());
            message.channel.send(embed);
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"game"** <@&795025257157230643>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
    }
}
