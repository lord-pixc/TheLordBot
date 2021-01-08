const {MessageEmbed} = require("discord.js");

module.exports = {
    nombre: "afiliados",
    alias: [],
    uso: "",
    ejemplo: "",
    categoria: "",
    descripcion: "",
    estado: "",
    run: async (client, message, args) => {
        try {
            const embed = new MessageEmbed()
                .setTitle("Afiliados")
                .setColor(0x5E9DE4)
                .setDescription("Todos lo serers afiliados tienen un comando propio donde si ejecutas ```tl!afiliados (code del server afiliados)``` te saltara su invitacion")
                .addField("Afiliados", "1- Jabberwock server-CODE:001")
                .setAuthor(client.user.username, client.user.avatarURL());
            if (!args[0]) return message.channel.send(embed);
            let invitacion;
            if (args[0] === '001') {
                invitacion = (await client.guilds.cache.get("755715986229035068").fetchInvites()).first();
            }
            const afiliado = new MessageEmbed();
            if(invitacion){
                afiliado.setDescription(`https://discord.gg/${invitacion.code}`);
            }else{
                afiliado.setDescription("No existe Invitación");
            }
            return message.channel.send(afiliado);
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"afiliados"** <@&795025257157230643>\n${error.toString()}\nMensaje: ${message.content}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
    }
}