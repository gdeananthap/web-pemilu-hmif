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
    return datas;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function deleteAllDpt(dpt) {
  const datas = await getAllDpt();
  const collection = db.collection("dpt")
  async function deleteDpt(nim) {
    await collection.doc(nim).delete()
  }
  await datas.forEach(async (data) => await deleteDpt(data.nim))
}

function saveAllDpt(dpt) {
  const stringDpt = JSON.stringify(dpt);
  fs.writeFileSync("votes.json", stringDpt);
}

getAllDpt()
  .then(datas => {
    deleteAllDpt(datas);
  })
  .catch(err => {
    //pass;
  });
