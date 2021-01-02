module.exports = {
    nombre: "say",
    alias: [],
    run: async(client, message, args) => {
        try {
            message.delete();
            if(!args[0]) return message.channel.send("Escribe lo que quieras que diga").then(m => m.delete({ timeout: 5000 }));
            const texto = args.join(" ")
            message.channel.send(texto, { allowedMentions: { parse: [] } })
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"say"** <@&795025257157230643>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
        
            
    }
}