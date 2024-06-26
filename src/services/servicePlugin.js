const SubmissionService = require('./submissionService');
const fastifyPlugin = require('fastify-plugin');

async function servicePlugin(fastfiy,options){
    fastify.decorate('submissionService',new SubmissionService(this.submissionRepository));
}

module.exports= fastifyPlugin(servicePlugin);