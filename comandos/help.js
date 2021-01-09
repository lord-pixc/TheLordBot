const {MessageEmbed} = require("discord.js");

module.exports = {
    nombre: "help",
    alias: ["ayuda"],
    ejemplo: "```help <comando del bot>",
    categoria: "util",
    descripcion: "muestra infomacion de comandos",
    estado: "En desarrollo",
    run: async (client, message, args) => {
        try {
            let filtroutil = client.comandos.filter(e => e.categoria === 'util')
            let comandosutil = filtroutil.map(c => `${c.nombre}`)
            let filtroentretenimiento = client.comandos.filter(e => e.categoria === 'entretenimiento')
            let comandosentretenimiento = filtroentretenimiento.map(c => `${c.nombre}`)
            let filtroinformacion = client.comandos.filter(e => e.categoria === 'informacion')
            let comandosinformacion = filtroinformacion.map(c => `${c.nombre}`)
            const prefix = client.servidores.get(message.guild.id).prefix;
            if(!args[0]){
            const embed = new MessageEmbed()
                .setTitle("Comandos")
                .setColor(0x5E9DE4)
                .addField("Informacion", `${comandosinformacion.join(', ')}`)
                .addField("Utiles", `${comandosutil.join(', ')}`)
                .addField("Entretenimiento", `${comandosentretenimiento.join(', ')}`)
                .setAuthor(client.user.username, client.user.avatarURL());
                return message.channel.send(embed);
            }
            let cmd = client.comandos.get(args[0].toLowerCase());
            if(!cmd)return message.channel.send('Ese comando no existe.')
            let nombre = cmd.nombre
            let alias = cmd.alias.length !== 0 ? cmd.alias.join(', ') : 'Ninguno'
            // let ejemplo = cmd.ejemplo.length !== 0 ? cmd.ejemplo : 'Ninguno'
            let categoria = cmd.categoria.length !== 0 ? cmd.categoria : "No definida"
            let descripcion = cmd.descripcion.length !== 0 ? cmd.descripcion : 'Ninguna'
            let estado = cmd.estado.length !== 0 ? cmd.estado : 'Desconocido'
            let ejemplo = cmd.ejemplo.replace('{{prefix}}', prefix)
            const emb = new MessageEmbed()
            .addField('Nombre', nombre)
            .addField('Alias', alias)
            .addField('Ejemplo', `\`\`\`${ejemplo}\`\`\``)
            .addField('Categoria', categoria)
            .addField('Descripcion', descripcion)
            .addField('Estado', estado)
            return message.channel.send(emb);
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"help"** <@&795025257157230643>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
    }
}
