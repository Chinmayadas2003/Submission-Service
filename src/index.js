// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const apiPlugin=require('./routes/api/apiRoutes');

const serverConfig=require('./config/serverConfig')

const app=require('./app');

fastify.register(app);//automatically takes fastify as a parameter
//fastify.register(apiPlugin)

//Declare a route
fastify.get('/', function handler (request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen({ port: serverConfig.PORT }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log("server started")
})
//fastify is building its own ecosystem.