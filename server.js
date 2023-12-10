const fastify = require('fastify')({logger: true})
const PORT = 3000;

fastify.get('/message', (request, reply) => {
    reply.send({msg: "Hello world !"})
})

const start = async () => {
    try {
        await fastify.listen({port: PORT, host: '0.0.0.0'})
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start();