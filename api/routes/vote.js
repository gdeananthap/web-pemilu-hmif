const express = require("express");
const { Router } = express;

const router = Router();

const Voter = require("../models/voter");

const {
  createSuccessMessage,
  createFailureMessage
} = require("../utils/response-message");
const { authMiddleware } = require("../middleware/auth");
const dateMiddleware = require("../middleware/dateMiddleware");
const dptMiddleware = require("../middleware/dptMiddleware");

// too lazy to seperate this to a file
const candidates = ["13518042", "18218005", "kosong"]; // bagas, alim

// get all candidates
router.get("/candidates", (req, res, next) => {
  res.send(createSuccessMessage({ data: candidates }));
});

router.post(
  "/",
  [authMiddleware, dateMiddleware, dptMiddleware],
  async (req, res) => {
    const { toBeVotedNim } = req.body;

    if (!toBeVotedNim) {
      res.status(400).send(
        createFailureMessage({
          message: "parameter not enough"
        })
      );
      return;
    }

    // check if the one he want to vote is a candidate
    if (!isVotedNimValid(toBeVotedNim)) {
      res.status(400).send(
        createFailureMessage({
          message: "The NIM of the person you want to vote is not valid"
        })
      );
      return;
    }

    // check if user have alrd voted
    if (req.dptData.hasVoted) {
      res.status(400).send(
        createFailureMessage({
          message: "You have already voted!"
        })
      );
      return;
    }

    // and finally he is dpt that has not voted yet!
    const voter = new Voter(req.nim);
    try {
      // ! the most important code: voting process
      await voter.vote(toBeVotedNim);
    } catch (error) {
      res.status(500).send(
        createFailureMessage({
          status: 500,
          message:
            "We're sorry but there's an internal server problem currently"
        })
      );
      return;
    }

    res.send(
      createSuccessMessage({
        message: "You have successfully voted"
      })
    );
  }
);

function isVotedNimValid(nim) {
  return !!candidates.find(e => e == nim);
}

module.exports = router;
