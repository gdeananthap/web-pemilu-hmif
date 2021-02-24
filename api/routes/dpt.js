const express = require("express");
const { adminMiddleware, authMiddleware } = require("../middleware/auth");
const { Router } = express;
const admin = require("firebase-admin");
const router = Router();

const Dpt = require("../models/dpt");
const {
  createSuccessMessage,
  createFailureMessage
} = require("../utils/response-message");
const dptMiddleware = require("../middleware/dptMiddleware");
const dptDatabase = new Dpt();

router.post(
  "/isdpt",
  [authMiddleware, dptMiddleware],
  async (req, res, next) => {
    res.send(
      createSuccessMessage({
        message: "You are a dpt"
      })
    );
  }
);

// create, only "admin" user can do this
router.post("/", adminMiddleware, async (req, res, next) => {
  const { nim } = req.body;

  if (isNimValid(nim)) {
    try {
      await dptDatabase.addDpt(nim);
      res
        .status(200)
        .send(createSuccessMessage({ message: "DPT successfully created" }));
    } catch (error) {
      res.status(400).send(createFailureMessage({ message: error.message }));
    }
  }
});

// delete, only admin user can do this
router.delete("/:nim", adminMiddleware, async (req, res, next) => {
  const { nim } = req.params;
  try {
    await dptDatabase.deleteDpt(nim);
    res
      .status(200)
      .send(createSuccessMessage({ message: `Successfully deleted ${nim}` }));
  } catch (err) {
    res.status(500).send(
      createFailureMessage({
        status: 500,
        message: "Failure in deleting nim"
      })
    );
  }
});

function isNimValid(nim) {
  const patt = /(135|182)1[789][012][0-9][0-9]/;
  return patt.test(nim);
}

module.exports = router;
