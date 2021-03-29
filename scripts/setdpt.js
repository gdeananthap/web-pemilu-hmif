// DANGEROUS FILE, COMMENTED
const dpts = require("./dpt.json");
const admin = require("./admin");

const db = admin.firestore();
const dptCollection = db.collection("dpt");

const batch = db.batch();

// Set the value of 'NYC'
dpts.forEach(dpt => {
  const dptRef = dptCollection.doc(dpt.toString());
  batch.set(dptRef, {
    hasVoted: false
  });
});
async function commitWrite() {
  await batch.commit();
  console.log("done!");
}

commitWrite();
