const { MessageEmbed } = require("discord.js");

module.exports = {
    nombre: "creditos",
    alias: ["credits"],
    run: async (client, message, args) => {
            const embed = new MessageEmbed()
               .setTitle("Comandos")
               .setColor(0x5E9DE4)
               .setDescription("Todos los comandos deben llevar el prefix 'th?'")
               .addField("Dueños", "LORDPIXC")
               .addField("Colaboradores", "Toastcode, Eli Maciel, Mr.Bug ")
               .setAuthor(client.user.username, client.user.avatarURL());
           message.channel.send(embed);
        }
}