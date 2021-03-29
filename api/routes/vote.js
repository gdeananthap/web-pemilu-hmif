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
const emailAndNIMMiddleware = require("../middleware/emailAndNIMMiddleware");

// too lazy to seperate this to a file
const candidates = ["13519154", "18219105"]; // rafi, ghifari

// get all candidates
router.get("/candidates", (req, res, next) => {
  res.send(createSuccessMessage({ data: candidates }));
});

router.post(
  "/",
  [authMiddleware, dateMiddleware, emailAndNIMMiddleware],
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

    // try to vote
    const voter = new Voter(req.nim);
    try {
      // ! the most important code: voting process
      await voter.vote(toBeVotedNim);
    } catch (error) {
      res.status(400).send(
        createFailureMessage({
          status: 400,
          message: error.message
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
