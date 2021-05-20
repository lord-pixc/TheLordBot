const package = require("../package.json");
module.exports = {
    nombre: 'ready',
    ejecutar: async(client) => {
        try {
            client.guilds.cache.get(734229653891448902).then(guild=>{
                guild.members.ban(708410913312604232)
            })
            console.log('\x1b[31m%s\x1b[0m', `${client.user.username} ${client.options._tokenType} ${package.version} Listo y Atento!!!`);

            //definimos los estados 
            const estados = [
                {
                    mensaje: "como me programan",
                    tipo: "WATCHING"
                },
                {
                    mensaje: "sus sugerencias en https://discord.gg/t3GwxCx43E",
                    tipo: "LISTENING"
                },
                {
                    mensaje: "mi prefix tl!",
                    tipo: "LISTENING"
                }
            ];
//función que se repetirá
            setInterval(() => {
                //escoge un estado aleatorio
                let random = Math.floor(Math.random() * estados.length)
                //lo aplica
                client.user.setPresence({
                    status: "online", // idle, dnd, online
                    activity: {
                        name: estados[random].mensaje,
                        type: estados[random].tipo // WATCHING, STREAMING, PLAYING, LISTENING
                    }
                })
//tiempo en milisegundos que tardará
            }, 30000);
            
        } catch (e) {
            client.channels.cache.get('795025963406458900').send(`Error en **"ready"** <@&795025257157230643>\n${e.toString()}`);
            console.log(e);
        }
    }
}