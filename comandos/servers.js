module.exports = {
    nombre: 'servers',
    alias: [],
    estado: "",
    ejemplo: "",
    categoria: "",
    descripcion: "",
    run: async (client, message, args) => {
        try {
            let servidores = client.guilds.cache.size;
            message.channel.send(`Estoy en ${servidores} servidores.`)
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"servers"** <@&795025257157230643>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
    }
}