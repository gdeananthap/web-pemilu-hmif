const express = require("express");
const { Router } = express;

const router = Router();

const Dpt = require("../models/dpt");
const {
  createSuccessMessage,
  createFailureMessage
} = require("../utils/response-message");
const dptDatabase = new Dpt();

router.get("/", async (req, res, next) => {
  const data = await dptDatabase.getAllDpt();
  res.status(200).send(createSuccessMessage({ data }));
});

// create
router.post("/", async (req, res, next) => {
  const { nim } = req.body;

  if (isNimValid(nim)) {
    try {
      await dptDatabase.addDpt(nim);
      res
        .status(200)
        .send(createSuccessMessage({ message: "DPT successfully created" }));
    } catch (error) {
      res
        .status(400)
        .send(createFailureMessage({ message: "failure in creating dpt" }));
    }
  }
});

function isNimValid(nim) {
  const patt = /1351[789][012][0-9][0-9]/;
  return patt.test(nim);
}

module.exports = router;
