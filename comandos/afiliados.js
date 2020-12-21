const { MessageEmbed } = require("discord.js");

module.exports = {
    nombre: "afiliados",
    alias: [],
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setTitle("Afiliados")
        .setColor(0x5E9DE4)
        .setDescription("Todos lo serers afiliados tienen un comando propio donde si ejecutas ```?afiliados (code del server afiliados)``` te saltara su invitacion")
        .addField("Afiliados", "1- Jabberwock server-CODE:002")
        .setAuthor(client.user.username, client.user.avatarURL()); 
        if (!args[0])return message.channel.send(embed);
                if(args[0] === '001'){
                    const embed = new MessageEmbed()
                    .setDescription('https://discord.gg/QSEMfxsMpR')
                    return message.channel.send(embed);}
    }
}