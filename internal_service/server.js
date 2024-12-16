
import * as Packages from './packages/node.packages.js'
import { InternalService } from './utils/db.utils.js';
import * as router from './routes/int.routes.js'

import dotenv from 'dotenv';

dotenv.config();
const fastify = Packages.fastify();



(async () => {
    try {
       
        global.db_service = new InternalService(process.env.mongo_url, process.env.db_name);
       
        await fastify.register(router);

        // Start the server
        const address = await fastify.listen({ port: 4000 });
        console.log(`Server listening at ${address}`);
            
    } catch (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
    }
})();
