const fastify = require('fastify')({
    logger: {
	    level: 'info',
	    prettyPrint : true
	}
})

fastify.register(require('fastify-postgres'), {
  connectionString: 'postgres://wiqywsor:pQ9S3PQCWXwehXxfoY57J2yDMXRY-8C3@tantor.db.elephantsql.com:5432/wiqywsor'
})

fastify.register(require('./routes'))


const start = async() => {
    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()