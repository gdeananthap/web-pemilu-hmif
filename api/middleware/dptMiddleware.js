const admin = require("firebase-admin");
const { createFailureMessage } = require("../utils/response-message");
const Dpt = require("../models/dpt");
const dptDatabase = new Dpt();

async function dptMiddleware(req, res, next) {
  const idToken = req.headers.idtoken;
  const dpt = await admin.auth().verifyIdToken(idToken);
  const { email } = dpt;

  if (!isEmailValid(email)) {
    res.status(300).send(
      createFailureMessage({
        status: 300,
        message: "email invalid, please use std email"
      })
    );
    return;
  }

  const nim = extractNimFromEmail(email);

  const data = await dptDatabase.getDpt(nim);
  if (!data) {
    res.status(400).send(
      createFailureMessage({
        message: "You are not dpt"
      })
    );
    return;
  }
  req.dptData = data;
  req.email = email;
  req.nim = nim;
  next();
}

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

module.exports = dptMiddleware;
