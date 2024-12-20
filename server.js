import * as Packages from  './packages/node.packages.js'

let fastify = Packages.fastify()

const env = Packages.dotenv;
env.config();

const AWS = Packages.aws
// const fastifyMultipart = Packages.fastifyMultipart
fastify.register(Packages.fastifyMultipart);

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: process.env.S3_REGION,
});

// fastify.get('/cloud', async (request, reply) => {
//   return { message: 'Welcome to the Cloud Microservice!' };
// });


// fastify.get('/s3/buckets', async (request, reply) => {
//   const s3 = new AWS.S3();
//   try {
//     const buckets = await s3.listBuckets().promise();
//     return { buckets: buckets.Buckets };
//   } catch (error) {
//     fastify.log.error(error);
//     reply.status(500).send({ error: 'Failed to list S3 buckets' });
//   }
// });


fastify.post('/upload',async (req,res)=>{
    try {
        const file = await req.file();
        let s = await file.toBuffer()
        console.log(s)
    } catch (error) {
        
    }
})



const start = async () => {
  try {

    await fastify.listen({ port: 3000 });
    console.log(`Server running at http://localhost:3000/`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
