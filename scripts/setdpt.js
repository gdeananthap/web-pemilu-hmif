const dptDatas = require("./dpt.json");
const admin = require("./admin");

const db = admin.firestore();
const dpt = db.collection("dpt");

const batch = db.batch();

// Set the value of 'NYC'
dptDatas.forEach(nim => {
  const dptRef = dpt.doc(nim.toString());
  batch.set(dptRef, {
    votefor: ""
  });
});
async function commitWrite() {
  await batch.commit();
  console.log("done!");
}

commitWrite();
