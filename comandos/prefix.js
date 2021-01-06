var admin = require("firebase-admin");
const db = admin.database();
module.exports = {
    nombre: "prefix",
    alias: ["prefijo"],
    ejemplo: "",
    categoria: "",
    descripcion: "",
    estado: "",
    run: async (client, message, args) => {
        try {
            console.log("s")
            if (!args[0]) return message.channel.send("Incluya el nuevo prefijo");
            db.ref(`servidores/${message.guild.id}/prefix`).set(args[0]);
            const servidor = client.servidores.get(message.guild.id);
            servidor.prefix = args[0];
            client.servidores.set(message.guild.id, servidor);
            message.channel.send(`Prefijo cambiado a ${args[0]}`);
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"prefix"** <@&795025257157230643>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
    }
}