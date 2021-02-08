// this guy have to be protected severely against attacks
const admin = require("firebase-admin");
const db = admin.firestore();

class Voter {
  constructor(dpt) {
    this.dpt = dpt;
  }

  async vote(nimToBeVoted) {
    if (!this.dpt) {
      throw new Error("Set the voter first!");
    }
    try {
      const toBeVotedRef = await db
        .collection("suara")
        .doc(nimToBeVoted.toString());
      const voterRef = await db.collection("dpt").doc(this.dpt);
      this.beginVoteTransaction(toBeVotedRef, voterRef);
    } catch (err) {
      throw err;
    }
    return true;
  }

  async beginVoteTransaction(toBeVotedRef, voterRef) {
    try {
      await db.runTransaction(async transaction => {
        const toBeVotedDoc = await transaction.get(toBeVotedRef);
        const latestTotalVote = toBeVotedDoc.data().totalVote;
        transaction.update(toBeVotedRef, {
          totalVote: latestTotalVote + 1
        });
        transaction.update(voterRef, {
          hasVoted: true
        });
      });
    } catch (err) {
      throw {
        name: "Voting error",
        message: "Something bad happened while voting"
      };
    }
  }
}

module.exports = Voter;
