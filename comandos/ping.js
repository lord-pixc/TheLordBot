module.exports = {
    nombre: "ping",
    alias: [],
    run: async (client, message, args) => {
        message.channel.send("pong!");
    }
}