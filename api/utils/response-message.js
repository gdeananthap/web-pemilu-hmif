function createFailureMessage({
  message = "Something went wrong",
  status = 400
}) {
  return {
    status,
    message
  };
}

function createSuccessMessage({
  message = "Request successfull",
  status = 200,
  data = null
}) {
  const successMessage = {
    status,
    message
  };
  if (!!data) {
    successMessage.data = data;
  }
  return successMessage;
}

module.exports = {
  createSuccessMessage,
  createFailureMessage
};
