
const fastify = require('fastify')({ logger: true })

async function apiPlugin(fastify,options){
    //this route allowed to redirect /test request redirect it to ./test/testRoutes'
   //await fastify.register(require('./test/testRoutes'),{prefix: '/test'});
   await fastify.register(require('./submissionRoutes'), {prefix: '/submissions'});
}

module.exports = apiPlugin;