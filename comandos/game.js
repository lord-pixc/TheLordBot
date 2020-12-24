const { MessageEmbed } = require("discord.js");
const admin = require('firebase-admin');
const db = admin.database();
const package = require('../package.json')

module.exports = {
    nombre: "game",
    alias: ["games"],
    alias: ["juego"],
    alias: ["juegos"],
    run: async (client, message, args) => {
        //validar si ingresó un juego
        if (args.length == 0) return message.channel.send("Escribe el juego que desees buscar, Ejemplo ```?game <NOMBRE DEL JUEGO>```")
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
            .addField("Subido por", consulta.val().usuario.nombre, true)
            .setThumbnail(consulta.val().imagen)
            .setImage(consulta.val().captura)
            .setAuthor(client.user.username, client.user.avatarURL())
            .setFooter(`TheLordBot ${package.version}`, client.user.avatarURL());
        message.channel.send(embed);
    }
}