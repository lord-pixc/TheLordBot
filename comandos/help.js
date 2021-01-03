const {MessageEmbed} = require("discord.js");

module.exports = {
    nombre: "help",
    alias: ["ayuda"],
    run: async (client, message, args) => {
        try {
            const prefix = client.servidores.get(message.guild.id).prefix;
            const embed = new MessageEmbed()
                .setTitle("Comandos")
                .setColor(0x5E9DE4)
                .setDescription(`Todos los comandos deben llevar el prefix '${prefix}'`)
                .addField("Informacion", "Info, creditos, afiliados, avatar,  servers, game")
                .addField("Utiles", "invite, ban, kick, ping")
                .addField("Entretenimiento", "meme")
                .setAuthor(client.user.username, client.user.avatarURL());
            message.channel.send(embed);
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"help"** <@&795025257157230643>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
    }
}