async function v1Routes(fastify, options){
    fastify.register(require('./submission.routes'), {prefix : '/submissions'});
};

module.exports = v1Routes;