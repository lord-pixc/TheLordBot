const { MessageEmbed } = require("discord.js");
module.exports = {
    nombre: "agregarjuego",
    alias: ["addgame"],
    run: async (client, message, args) => {
         const embed = new MessageEmbed()
               .setTitle("Como agregar juegos")
               .setColor(0x5E9DE4)
               .setDescription("Si agregas un juego a la base de datos este juego podra ser aceptado y asi estara para usarse en el comando ```?game <nombre del juego>```")
               .addField("Agregar un juego", "En este link podras agregar mas juegos a la base de datos https://database-juegos-upload.glitch.me/" )
               .addField("¿Que ganas?", "Tenemos pensado hacer una tabla de los mayores contribuidores en donde el que mas contribuya sera el top 1, ademas de obtener rangos exclusivos en nuestros server afiliados")
               .setAuthor(client.user.username, client.user.avatarURL());
           message.channel.send(embed);
        }
}