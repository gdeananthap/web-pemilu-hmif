const admin = require("firebase-admin");
const { createFailureMessage } = require("../utils/response-message");
const Dpt = require("../models/dpt");
const dptDatabase = new Dpt();

async function dptMiddleware(req, res, next) {
  const data = await dptDatabase.getDpt(req.nim);
  if (!data) {
    res.status(400).send(
      createFailureMessage({
        message: "You are not dpt"
      })
    );
    return;
  }
  req.dptData = data;
  next();
}

module.exports = dptMiddleware;
