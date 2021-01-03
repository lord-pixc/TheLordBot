var bd = require("firebase-admin").firestore();
module.exports = {
    loadsfw: async (array, client) => {
        for (const i of array) {
            const snapshot = await bd.collection('sfw').doc(i).get();
            if (snapshot.exists ){
                client.sfw.set(i, snapshot.doc().gif);
                console.log(`sfw ${i} cargado correctamente`)
            } else {
                console.log(`sfw ${i} no existe`)
            }
        }
    }
}


// client.sfw.set("cry", snapshot);