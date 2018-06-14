async function routes(fastify, options) {

    fastify.get('/user/:id', async(req, reply) => {
        const client = await fastify.pg.connect()
        const { rows } = await client.query(
            'SELECT name FROM users WHERE id=$1', [req.params.id],
        )
        client.release()
        return rows
    })
    fastify.post('/userx/', async(req, reply) => {
        console.log(request.body)
        console.log(request.query)
        console.log(request.params)
        console.log(request.headers)
        console.log(request.raw)
        console.log(request.id)
        request.log.info('some info')
        // const client = await fastify.pg.connect()
        // const { rows } = await client.query(
        //     'SELECT name FROM users WHERE id=$1', [req.params.id],
        // )
        // client.release()
        // return rows
        return {status:"success"}
    })

    fastify.route({
        method: 'GET',
        url: '/',
        schema: {
            querystring: {
                name: { type: 'string' },
                excitement: { type: 'integer' }
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        hello: { type: 'string' }
                    }
                }
            }
        },
        handler: function(request, reply) {
            reply.send({ hello: 'world' })
        }
    })

    fastify.get('/x/', options, async function(request, reply) {
        const client = await fastify.pg.connect()
        var data = await await client.query(
            'SELECT count(*) FROM users; ',
        )

        client.release()

        return {suc}
    })

}

module.exports = routes