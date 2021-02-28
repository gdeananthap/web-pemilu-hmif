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
      this.nimToBeVoted = nimToBeVoted;
      this.beginVoteTransaction();
    } catch (err) {
      throw err;
    }
    return true;
  }

  async beginVoteTransaction() {
    try {
      await db.runTransaction(async transaction => {
        const voterDoc = await transaction.get(voterRef);
        if (voterDoc.data().hasVoted === true) {
          throw {
            message: "Anda telah memberikan vote anda"
          };
        }
        const toBeVotedRef = db
          .collection("votes")
          .doc(this.nimToBeVoted.toString());
        const voterRef = db.collection("dpt").doc(this.dpt);
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
