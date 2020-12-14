module.exports = {
    nombre: 'servers',
    alias: [],
    run: async(client, message, args) => {
        let servidores = client.guilds.cache.size;
        message.channel.send(`Estoy en ${servidores} servidores.`)
    }
}