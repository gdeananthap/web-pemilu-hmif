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
      (await this.incrementVote(nimToBeVoted))(
        await this.setVoterHasVotedToTrue()
      );
    } catch (error) {
      if (error.name == "voter") {
        // if this also error, pray to God
        await this.decrementVote(nimToBeVoted);
      }
    }
    return true;
  }

  async incrementVote(nimToBeVoted) {
    try {
      // increment vote
      const toBeVotedDoc = await db
        .collection("suara")
        .doc(nimToBeVoted.toString());
      const latestTotalVote = (await toBeVotedDoc.get()).data().totalVote;
      toBeVotedDoc.update({
        totalVote: latestTotalVote + 1
      });
    } catch (err) {
      throw {
        name: "voting",
        message: "Error while incrementing the vote count"
      };
    }
  }

  async decrementVote(nimToBeVoted) {
    try {
      // increment vote
      const toBeVotedDoc = await db
        .collection("suara")
        .doc(nimToBeVoted.toString());
      const latestTotalVote = (await toBeVotedDoc.get()).data().totalVote;
      toBeVotedDoc.update({
        totalVote: latestTotalVote - 1
      });
    } catch (err) {
      throw {
        name: "voting",
        message: "Error while decrementing the vote count"
      };
    }
  }

  async setVoterHasVotedToTrue() {
    try {
      // set hasvoted for user = true
      const voterDoc = await db.collection("dpt").doc(this.dpt.toString());
      voterDoc.update({
        hasVoted: true
      });
    } catch (err) {
      throw {
        name: "voter",
        message: "Error while setting hasvoted = true for voter"
      };
    }
  }
}

module.exports = Voter;
