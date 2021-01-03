var bd = require("firebase-admin").firestore();
module.exports = {
    loadsfw: async (array, client) => {
        try {
            for (const i of array) {
                const snapshot = await bd.collection('sfw').doc(i).get();
                if (snapshot.exists ){
                    client.sfw.set(i, snapshot.data().gif);
                    console.log(`sfw ${i} cargado correctamente`)
                } else {
                    console.log(`sfw ${i} no existe`)
                }
            }
        } catch (error) {
            client.channels.cache.get('795025963406458900').send(`Error en **"sfw"** <@&795025257157230643>\n${error.toString()}`);
            console.log(error);
        }
    }
}


// client.sfw.set("cry", snapshot);