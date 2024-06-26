const SubmissionProducer=require('../producers/submissionQueueProducer');
const SubmissionRepository = require('../repository/submissionRepository');

class SubmissionService {
    constructor(submissionRepository){
        //inject here
        this.submissionRepository = SubmissionRepository;
    }

    async pingCheck(){
        return 'pong'
    }
    //it will take a submission obbject
    async addSubmission(submission){
        const submission=this.submissionRepository.createSubmission(submission);
        if(!submission){
            //TODO add error handling 
            throw {message: "not able to create submission"}
        }
        console.log(submission);
        const response= await SubmissionProducer(submission);
        return {queueResponse: response,submission};
    }
}
module.exports = SubmissionService;