const { MessageEmbed } = require("discord.js");

module.exports = {
    nombre: "help",
    alias: ["ayuda"],
    run: async (client, message, args) => {
            const embed = new MessageEmbed()
               .setTitle("Comandos")
               .setColor(0x5E9DE4)
               .setDescription("Todos los comandos deben llevar el prefix ``tl!``")
               .addField("Informacion", "creditos, afiliados, avatar,  servers, game")
               .addField("Utiles", "invite, ping, ban, kick")
               .addField("Entretenimiento", "meme, cry")
               .setAuthor(client.user.username, client.user.avatarURL());
           message.channel.send(embed);
        }
}