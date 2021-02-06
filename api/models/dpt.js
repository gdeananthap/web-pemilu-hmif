const firebase = require("firebase").default;
require("firebase/firestore");
const db = firebase.firestore();

class Dpt {
  constructor() {
    this.dpt = db.collection("dpt");
  }

  async getDpt(nim) {
    const docRef = this.dpt.doc(nim.toString());
    console.log(nim.toString());
    if (!docRef) {
      return false;
    }
    const doc = await docRef.get();
    console.log("the doc: ");
    console.log(doc.exists);
    console.log("the data: ");
    console.log(doc.data());
    return doc.data();
  }

  async getAllDpt() {
    const docs = (await this.dpt.get()).docs;
    console.log("All dpt:");
    const dpts = this.extractNim(docs);
    console.log(dpts);
    return dpts;
  }

  //! returns an array
  extractNim(docs) {
    return docs.map(doc => doc.id);
  }

  async deleteDpt(nim) {
    try {
      const res = this.dpt.doc(nim).delete();
      console.log("deleted a doc, detail:");
      console.log(res);
      return true;
    } catch (err) {
      throw new Error(
        "Error in deleting dpt, probably the dev sucks at programming"
      );
    }
  }

  async addDpt(nim) {
    this.dpt.doc(nim.toString()).set({
      nim,
      hasVoted: false
    });
  }
}

module.exports = Dpt;
