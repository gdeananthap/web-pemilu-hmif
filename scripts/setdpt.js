const voters = require("./votes.json");
const admin = require("./admin");

const db = admin.firestore();
const dpt = db.collection("dpt");

const batch = db.batch();

// Set the value of 'NYC'
voters.forEach(voter => {
  const dptRef = dpt.doc(voter.nim.toString());
  batch.set(dptRef, {
    hasVoted: voter.votefor !== ""
  });
});
async function commitWrite() {
  await batch.commit();
  console.log("done!");
}

commitWrite();
