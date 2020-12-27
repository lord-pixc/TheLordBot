module.exports = {
    nombre: "say",
    alias: [],
    run: async (client, message, args) => {
        message.delete();
        if(!args[0]) return message.channel.send("Escribe lo que quieras que diga").then(m => m.delete({ timeout: 5000 }));
        const texto = args.join(" ")
        message.channel.send(texto, { allowedMentions: { parse: [] } })
            
    }
}