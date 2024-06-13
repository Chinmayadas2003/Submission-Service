const pingRequest = require('../../../../controllers/testController');
const fastifyPlugin=require('fastify-plugin');

const fastify = require('fastify')({ logger: true });

/**
 * Register the /ping route.
 *
 * @param {FastifyInstance} fastify - The Fastify instance.
 * @param {Object} options - Options for configuring the plugin.
 */
async function testRoute(fastify, options) {
  fastify.get('/ping',pingRequest);
}

module.exports = testRoute;

//routes you dont have dedicately use plugins it is by default supported to be registered by plugin
