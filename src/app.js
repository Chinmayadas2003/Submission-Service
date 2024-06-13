const fastify = require('fastify')({ logger: true })
const fastifyPlugin = require('fastify-plugin');

/**
 * 
 * @param {Fastify object} fastify 
 * @param {*} options 
 */
async function app(fastify,options){
    fastify.register(require('@fastify/cors'));

    //register testroutes-recommended to do through plugin
    fastify.register(require('./routes/api/apiRoutes'), {prefix: '/api'});

}

module.exports=fastifyPlugin(app);//app function becomes a fastify plugin
//plugin is a special object that you can use with register with fastify  object