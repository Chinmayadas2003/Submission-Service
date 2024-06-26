const submissionQueue = require("../queues/submissionQueue");
// Assuming SubmissionPayload is a TypeScript type and is not needed for runtime, it can be omitted in CommonJS
// const { SubmissionPayload } = require("../types/SubmissionPayload"); 

module.exports = async function (payload) {
  await submissionQueue.add("SubmissionJob", payload);
  console.log("Successfully added a new submission job");
}
