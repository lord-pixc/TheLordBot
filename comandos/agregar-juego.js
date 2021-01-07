const {MessageEmbed} = require("discord.js");
module.exports = {
    nombre: "agregarjuego",
    alias: ["addgame"],
    ejemplo: "```addgame```",
    categoria: "util",
    descripcion: "Link para agregar juegos al comando ``game``",
    estado: "Activo",
    run: async (client, message, args) => {
        try {
            const prefix = client.servidores.get(message.guild.id).prefix;
            const embed = new MessageEmbed()
                .setTitle("Como agregar juegos")
                .setColor(0x5E9DE4)
                .setDescription(`Si agregas un juego a la base de datos este juego podra ser aceptado y asi estara para usarse en el comando \`${prefix}game <nombre del juego>\``)
                .addField("Agregar un juego", "En este link podras agregar mas juegos a la base de datos https://thelordweb.glitch.me/game/add")
                .addField("¿Que ganas?", "Tenemos pensado hacer una tabla de los mayores contribuidores en donde el que mas contribuya sera el top 1, ademas de obtener rangos exclusivos en nuestros server afiliados")
                .setAuthor(client.user.username, client.user.avatarURL());
            message.channel.send(embed);
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"agregarjuego"** <@&795025257157230643>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
    }
}
