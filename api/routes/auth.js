const express = require("express");
const { Router } = express;
const admin = require("firebase-admin");
const router = Router();

const {
  createSuccessMessage,
  createFailureMessage
} = require("../utils/response-message");

// get who is authenticated
router.get("/", async (req, res, next) => {
  try {
    const idToken = req.headers.idtoken;
    if (!idToken) {
      res.status(400).send(
        createFailureMessage({
          message: "You are not authenticated"
        })
      );
      return;
    }

    const { email, admin } = await admin.auth().verifyIdToken(idToken);
    const data = { email };
    if (admin) {
      data.isAdmin = true;
    }
    res.status(200).send(createSuccessMessage({ data }));
  } catch (err) {
    res.status(400).send(createFailureMessage({ message: "Id token invalid" }));
  }
});

module.exports = router;
