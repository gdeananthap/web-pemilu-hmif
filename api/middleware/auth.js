const admin = require("firebase-admin");
const { createFailureMessage } = require("../utils/response-message");

async function adminMiddleware(req, res, next) {
  const claims = await getClaims(req.headers.idtoken);

  if (claims.admin) {
    next();
  } else {
    res.status(300).send(
      createFailureMessage({
        status: 300,
        message: "You are not an admin"
      })
    );
  }
}

async function authMiddleware(req, res, next) {
  const claims = await getClaims(req.headers.idtoken);

  if (!claims) {
    res.status(300).send(
      createFailureMessage({
        status: 300,
        message: "You are not authenticated"
      })
    );
    return;
  }
  next();
}

function getClaims(idToken) {
  return admin.auth().verifyIdToken(idToken);
}

module.exports = {
  adminMiddleware,
  authMiddleware
};
