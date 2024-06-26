const fastify = require('fastify')({ logger: true })
const fastifyPlugin = require('fastify-plugin');
const servicePlugin = require('./services/servicePlugin');
const repositoryPlugin = require('./repository/repositoryPlugin');

//doing app level configuration here

/**
 * 
 * @param {Fastify object} fastify 
 * @param {*} options 
 */
async function app(fastify,options){
    fastify.register(require('@fastify/cors'));

    fastify.register(repositoryPlugin);
    fastify.register(servicePlugin);

    //register testroutes-recommended to do through plugin
    fastify.register(require('./routes/api/apiRoutes'), {prefix: '/api'});

    fastify.register(require('./routes/api/v1/submissionRoutes'),{prefix:'/todos'});



}

module.exports=fastifyPlugin(app);//app function becomes a fastify plugin
//plugin is a special object that you can use with register with fastify  object
//plugin are used to extend functionality and reuse the code
