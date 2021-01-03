const { MessageEmbed } = require('discord.js');
const package = require('../package.json');
var admin = require("firebase-admin");
const db = admin.database();

module.exports = {
    nombre: "message",
    ejecutar: async (client, message) => {
        try {
            // verificamos si el servidor existe en el cliente
            if(!client.servidores.get(message.guild.id)){
                // creamos la configuración inicial por defecto
                config = {
                    prefix: "tl!",
                    name: message.guild.name
                };
                // lo registramos en la base de datos
                db.ref(`servidores/${message.guild.id}`).set(config);
                // lo subimos al cliente
                client.servidores.set(message.guild.id, config);
                console.log('\x1b[34m%s\x1b[0m', 'Servidor', message.guild.name, '\x1b[34mcargado en el cliente correctamente');
            } else {
                // obtiene el prefix del servidor
                const prefix = client.servidores.get(message.guild.id).prefix;
                if (message.author.bot || message.channel.type === "dm") return;
                //MENCION DEL BOT
                let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
                //MENSAJE
                const emb = new MessageEmbed();
                emb.setDescription(`mi prefix es ${prefix}`);
                //enviar mensaje
                if (message.content.match(RegMention)) return message.channel.send(emb);
                //ARGS
                if (!message.content.startsWith(prefix)) return;
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
        } catch (e) {
            client.channels.cache.get('795025963406458900').send(`Error en **"message"** <@&795025257157230643>\n${e.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(e);
        }
    }
}