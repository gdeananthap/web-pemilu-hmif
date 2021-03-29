const { createFailureMessage } = require("../utils/response-message");

async function dateMiddleware(req, res, next) {
  // get start date
  const votingStart = new Date(2021, 2, 29, 7, 0, 0);
  const votingEnd = new Date(2021, 3, 9, 23, 0, 0);
  // check if date now is alrd vote start
  const dateNow = new Date();
  // if no kill process
  if (dateNow < votingStart) {
    res.status(400).send(
      createFailureMessage({
        message: "Pemilu belom mulai bray"
      })
    );
    return;
  }
  if (dateNow > votingEnd) {
    res.status(400).send(
      createFailureMessage({
        message: "Pemilu udah beres bray"
      })
    );
    return;
  }
  next();
}

module.exports = dateMiddleware;
