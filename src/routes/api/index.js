async function apiRoutes(fastify, options){
    fastify.register(require('./v1'), {prefix : '/v1'});
};

module.exports = apiRoutes;