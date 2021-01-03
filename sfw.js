var bd = require("firebase-admin").database();
module.exports = async (array) => {
    [].forEach(i => {
        const snapshot = (await bd.collection('sfw').doc('cry').get()).data().gif;
        client.sfw.set("cry", snapshot);
    });
    const claps = (await bd.collection('sfw').doc('claps').get()).data().gif;
    client.sfw.set("claps", claps);
}