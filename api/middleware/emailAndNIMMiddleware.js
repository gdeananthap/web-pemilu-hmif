const admin = require("firebase-admin");

async function emailAndNIMMiddleware(req, res, next) {
  const idToken = req.headers.idtoken;
  const user = await admin.auth().verifyIdToken(idToken);
  const { email } = user;

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
  req.nim = nim;
  req.email = email;
  next();
}

function isEmailValid(email) {
  const [nim, back] = email.split("@");
  if (back != "std.stei.itb.ac.id") {
    return false;
  }
  const patt = /(135)|(182)1[6789][0123][0-9][0-9]/;
  return patt.test(nim);
}

function extractNimFromEmail(email) {
  return email.split("@")[0];
}

module.exports = emailAndNIMMiddleware;
