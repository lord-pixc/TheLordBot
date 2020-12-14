const {prefix} = require('../config.json');
const {MessageEmbed} = require('discord.js')
const package = require('../package.json')

module.exports = {
    nombre: "message",
    ejecutar: async (client, message) => {
        if(message.author.bot || message.channel.type === "dm") return;     
        //MENCION DEL BOT
        let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`); 
        //MENSAJE
        const emb = new MessageEmbed()
        .setDescription('mi prefix es ?')
        //enviar mensaje
        if(message.content.match(RegMention))return message.channel.send(emb)
        //ARGS
        if(!message.content.startsWith(prefix))return
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        //COMMAND
        const command = args.shift().toLowerCase(); //args[0]
        //busca comando
        let cmd = client.comandos.get(command) || client.comandos.find((c) => c.alias.includes(command));
        //si existe
        if (cmd) {
            cmd.run(client, message, args);
        }
    }
}