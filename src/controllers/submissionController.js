async function createSubmission(req,res){

    const response = await this.submissionService.addSubmission(req.body);
    return res.status(201).json({
        error: {},
        success: true,
        message: 'Created submission successfully',
        data: response,
        
    });
    
}
//add validation layer for this
module.exports={
    createSubmission
}