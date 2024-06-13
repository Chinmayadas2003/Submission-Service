
const fastify = require('fastify')({ logger: true })


async function apiPlugin(fastify,options){
    //this route allowed to redirect /test request redirect it to ./test/testRoutes'
   await fastify.register(require('./v1/v1Routes'),{prefix: '/v1'});
}

module.exports = apiPlugin;