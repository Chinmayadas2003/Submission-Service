const Submission= require('../models/submissionModel');

class SubmissionRepository {
    constructor(){
        this.SubmissionModel= Submission;//intilaize this.Submision model to submission 
    }

    async createSubmission(submission){
        const response= await this.SubmissionModel.create(submission);
        return response;
    }
}

module.exports= SubmissionRepository;