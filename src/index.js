const fastify = require('fastify')({ logger : false });
const app = require('./app');

const connectToDB = require('./config/db.config');
const { PORT } = require('./config/server.config');

fastify.get('/', (req, res)=>{
  res.send({ hello: 'world' });
});

fastify.register(app);

fastify.listen({ port: PORT }, async (err) => {
  if (err) {
    console.log(err);
  }
  
  await connectToDB();
  console.log(`Server is going on port ${PORT}`);
});