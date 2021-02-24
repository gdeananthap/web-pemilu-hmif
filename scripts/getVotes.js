const admin = require("./admin");
const db = admin.firestore();
const fs = require("fs");

async function getAllDpt() {
  try {
    const docs = (await db.collection("dpt").get()).docs;
    const datas = docs.map(doc => ({
      nim: doc.id,
      votefor: doc.data().votefor
    }));
    console.log(datas);
    return datas;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

function saveAllDpt(dpt) {
  const stringDpt = JSON.stringify(dpt);
  fs.writeFileSync("votes.json", stringDpt);
}

getAllDpt()
  .then(datas => {
    saveAllDpt(datas);
  })
  .catch(err => {
    //pass;
  });
