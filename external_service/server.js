import * as Packages from './packages/node.packages.js'


const env = Packages.dotenv;
env.config();
const fastify = Packages.fastify();


(async () => {
    try {
        await fastify.register(require('./routes/ext.routes.js'));
        // Start the server
        const address = await fastify.listen({ port: 4001 });
        console.log(`Server listening at ${address}`);
            
    } catch (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
    }
})()