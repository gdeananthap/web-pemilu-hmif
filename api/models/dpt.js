const admin = require("firebase-admin");
const db = admin.firestore();

class Dpt {
  constructor() {
    this.dpt = db.collection("dpt");
  }

  async getDpt(nim) {
    const docRef = this.dpt.doc(nim.toString());
    const doc = await docRef.get();
    if (!doc.data()) {
      return false;
    }
    return doc.data();
  }

  async getAllDpt() {
    const docs = (await this.dpt.get()).docs;
    const dpts = docs.map(doc => doc.data());
    return dpts;
  }

  async deleteDpt(nim) {
    try {
      await this.dpt.doc(nim).delete();
      return true;
    } catch (err) {
      throw new Error(
        "Error in deleting dpt, probably the dev sucks at programming"
      );
    }
  }

  async addDpt(nim) {
    const docRef = this.dpt.doc(nim.toString());
    // if dpt exists, exit
    if ((await docRef.get()).exists) {
      throw { name: "Adding error", message: "dpt already exists" };
    }
    // else, create it
    docRef.set({
      nim,
      hasVoted: false
    });
    return true;
  }
}

module.exports = Dpt;
