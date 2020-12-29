const {MessageEmbed} = require('discord.js');
const package = require('../package.json');
var admin = require("firebase-admin");
const db = admin.database();

module.exports = {
    nombre: "message",
    ejecutar: async (client, message) => {
        // verificamos si el servidor existe en el cliente
        if(!client.servidores.get(message.guild.id)){
            // creamos la configuración inicial por defecto
            config = {
                prefix: "tl!"
            };
            // lo registramos en la base de datos
            db.ref(`servidores/${message.gild.id}`).set(config);
            // lo subimos al cliente
            client.servidores.set(message.guild.id, config);
        } else {
            // obtiene el prefix del servidor
            const prefix = client.servidores.get(message.guild.id).prefix; 
            if(message.author.bot || message.channel.type === "dm") return;     
            //MENCION DEL BOT
            let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`); 
            //MENSAJE
            const emb = new MessageEmbed();
            emb.setDescription(`mi prefix es ${prefix}`);
            //enviar mensaje
            if(message.content.match(RegMention)) return message.channel.send(emb);
            //ARGS
            if(!message.content.startsWith(prefix)) return;
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
}