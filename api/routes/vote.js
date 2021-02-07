const express = require("express");
const { Router } = express;

const router = Router();

const Dpt = require("../models/dpt");
const dptDatabase = new Dpt();

const Voter = require("../models/voter");

const admin = require("firebase-admin");

const {
  createSuccessMessage,
  createFailureMessage
} = require("../utils/response-message");
const { authMiddleware } = require("../middleware/auth");

// too lazy to seperate this to a file
const candidates = ["13518042", "18218005"]; // bagas, alim

// get all candidates
router.get("/candidates", (req, res, next) => {
  res.send(createSuccessMessage({ data: candidates }));
});

router.post("/", authMiddleware, async (req, res, next) => {
  const { toBeVotedNim } = req.body;
  const idToken = req.headers.idtoken;

  // check if the one he want to vote is a candidate
  if (!isVotedNimValid(toBeVotedNim)) {
    res.status(400).send(
      createFailureMessage({
        message: "The NIM of the person you want to vote is not valid"
      })
    );
    return;
  }

  // verify email
  const claims = await admin.auth().verifyIdToken(idToken);
  const { email } = claims;
  const nim = extractNimFromEmail(email);
  if (!isEmailValid(email)) {
    res.status(300).send(
      createFailureMessage({
        status: 300,
        message: "email invalid, please use std email"
      })
    );
    return;
  }

  // check if user is dpt
  const dptDetail = await dptDatabase.getDpt(nim);
  if (!dptDetail) {
    res.status(400).send(
      createFailureMessage({
        message: "You are not a dpt"
      })
    );
    return;
  }

  // check if user have alrd voted
  if (dptDetail.hasVoted) {
    res.status(400).send(
      createFailureMessage({
        message: "You have already voted!"
      })
    );
    return;
  }

  // and finally he is dpt that has not voted yet!
  const voter = new Voter(nim);
  try {
    // ! the most important code: voting process
    await voter.vote(toBeVotedNim);
  } catch (error) {
    res.status(500).send(
      createFailureMessage({
        status: 500,
        message: "We're sorry but there's an internal server problem currently"
      })
    );
    return;
  }

  res.send(
    createSuccessMessage({
      message: "You have successfully voted"
    })
  );
});

function isVotedNimValid(nim) {
  return !!candidates.find(e => e == nim);
}

// verify STD email in case someone tries to use other kind of email
function isEmailValid(email) {
  const [nim, back] = email.split("@");
  if (back != "std.stei.itb.ac.id") {
    return false;
  }
  const patt = /1351[789][012][0-9][0-9]/;
  return patt.test(nim);
}

function extractNimFromEmail(email) {
  return email.split("@")[0];
}

module.exports = router;
