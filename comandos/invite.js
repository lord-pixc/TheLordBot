const { MessageEmbed } = require("discord.js");

module.exports = {
    nombre: "invite",
    alias: ["invitar"],
    run: async (client, message, args) => {
        message.channel.send("Puedes invitarme a tu server desde https://cutt.ly/2hUGlED ```Sin miedo al acortador```")
    }
}