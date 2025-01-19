async function v1Routes(fastify, options){
    fastify.register(require('./test'), {prefix : '/test'});
};

module.exports = v1Routes;