import * as controller from '../controller/db.controller.js'
import * as fastify from '../packages/node.packages.js';

export default async function(fastify){
fastify.get("/get_db_data",controller.find);
fastify.get('/get_db_data_one',controller.findOne);
fastify.post('/insert_db_data',controller.insertOne);
fastify.post('/insert_db_data_many',controller.insertMany);
fastify.patch('/update_db_data',controller.updateOne);
fastify.patch('/update_db_data_many',controller.updateMany);
fastify.delete('/delete_db_data',controller.deleteOne);
fastify.delete('/delete_db_data_many',controller.deleteMany);
fastify.post('/aggregate_db_data',controller.aggregate);
}