const { createFailureMessage } = require("../utils/response-message");

async function dateMiddleware(req, res, next) {
  // get start date
  const votingStart = new Date(2021, 1, 26, 7, 0, 0);
  const votingEnd = new Date(2021, 2, 1, 23, 0, 0);
  // check if date now is alrd vote start
  const dateNow = new Date();
  // if no kill process
  if (dateNow < votingStart) {
    res.status(200).send(
      createFailureMessage({
        status: 200,
        message: "Pemilu belom mulai bray"
      })
    );
    return;
  }
  if (dateNow > votingEnd) {
    res.status(200).send(
      createFailureMessage({
        status: 200,
        message: "Pemilu udah beres bray"
      })
    );
    return;
  }
  next();
}

module.exports = dateMiddleware;
