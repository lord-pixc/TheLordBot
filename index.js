////////// D E C L A R A C I O N E S //////////
const { Client, MessageEmbed, Collection, MessageAttachment } = require("discord.js");
const client = new Client({ws: {intents: 32511}});
require('dotenv').config(); //variables de entorno
client.comandos = new Collection();
client.sfw = new Collection();
client.servidores = new Collection();
const {readdirSync} = require("fs");
const comandos = readdirSync("./comandos").filter((f) => f.endsWith(".js"));

var admin = require("firebase-admin");
const {token} = require('./config.json');

var serviceAccount = require("./thelordbot-5b0ce-firebase-adminsdk-9bygs-8e27b1dce0.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://thelordbot-5b0ce.firebaseio.com"
});
const bd = admin.firestore();
const db = admin.database();

//Cargar SFW
(async function(){
    
})();

//cargar las configuraciones en el cliente
db.ref(`servidores`).once('value').then( snapshot => {
    //obtenemos la base de datos
    const servidores = snapshot.val();
    //recorremos los server
    for (const servidor in servidores) {
        //creamos las configuraciones
        const obj = { 
            prefix: servidores[servidor].prefix //el prefix
        }
        //cargamos la configuración
        client.servidores.set(servidor, obj);
        //log
        console.log('\x1b[34m%s\x1b[0m', 'Servidor', servidores[servidor].name, '\x1b[34mcargado en el cliente correctamente');
    }
});

////////// C A R G A R   C O M A N D O S //////////
for (var archi of comandos) {
    let comando = require("./comandos/" + archi);
    client.comandos.set(comando.nombre, comando);
    console.log('\x1b[32m%s\x1b[0m', archi + " fue cargado correctamente");
}
////////// C A R G A R   E V E N T O S //////////
const eventos = readdirSync('./eventos').filter((f) => f.endsWith('.js'));
for(const archi of eventos){
    let evento = require(`./eventos/${archi}`)
    client.on(evento.nombre, evento.ejecutar.bind(null, client))
}

////////// L O G I N //////////
client.login(token);