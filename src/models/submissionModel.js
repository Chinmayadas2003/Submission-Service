const mongoose= require('mongoose');

const submissionSchema= new mongoose.Schema({
    userID: {
        type: String,
        required: [true,"User id for the submission is missing"],
    },
    problemId: {
        type: String,
        required: [true,"problem id for the submission is missing"],
    },
    code: {
        type: String,
        required: [true,"code  for the submission is missing"],
    },
    language: {
        type: String,
        required: [true,"Language for the submission is missing"],
    },
    status: {
        type: String,
        enum: ['pending', 'success', 'TLE','RE','MLE','WA'], // Replace with your actual enum values
        default: 'pending',
      }
});

const Submission = mongoose.model('Submission',submissionSchema);
module.exports= Submission;