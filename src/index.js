const fastify = require('fastify')({ logger : false });

const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');

fastify.get('/', (req, res)=>{
  res.send({ hello: 'world' });
});

fastify.register(app);

fastify.listen({ port: process.env.PORT }, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is going on port ${process.env.PORT}`);
});