import * as controller from '../controller/db.controller.js'
import * as fastify from '../packages/node.packages.js';

export default async function(fastify){
fastify.get("/internal_service/get_db_data",controller.find);
fastify.get('/internal_service/get_db_data_one',controller.findOne);
fastify.post('/internal_service/insert_db_data',controller.insertOne);
fastify.post('/internal_service/insert_db_data_many',controller.insertMany);
fastify.patch('/internal_service/update_db_data',controller.updateOne);
fastify.patch('/internal_service/update_db_data_many',controller.updateMany);
fastify.delete('/internal_service/delete_db_data',controller.deleteOne);
fastify.delete('/internal_service/delete_db_data_many',controller.deleteMany);
fastify.get('/internal_service/aggregate_db_data',controller.aggregate);
}