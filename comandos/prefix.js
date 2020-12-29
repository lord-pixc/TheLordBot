var admin = require("firebase-admin");
const db = admin.database();
module.exports = {
    nombre: "prefix",
    alias: ["prefix"],
    run: async (client, message, args) => {
        if (!args[0]) return message.channel.send("Incluya el nuevo prefijo");
        db.ref(`servidores/${message.guild.id}/prefix`).set(args[0]);
        client.servidores.get(message.guild.id).prefijo = args[0];
        message.channel.send(`Prefijo cambiado a ${args[0]}`);
    }
}