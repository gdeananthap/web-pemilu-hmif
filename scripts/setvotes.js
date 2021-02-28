const admin = require("./admin");
const results = require("./result.json");

const db = admin.firestore();
const votesCollection = db.collection("votes");
const batch = db.batch();

const candidates = ["13518042", "18218005", "kosong"];

candidates.forEach(candidate => {
  const ref = votesCollection.doc(candidate);

  batch.set(ref, {
    totalVote: results[candidate].votes
  });
});

batch.commit();
