const express = require('express');


let useRouter = routerName => require(`src/modules/${routerName}/router`);

let getDomainRouter = () => {
    let router = new express.Router();

    router.use('/tasks', useRouter('task'));

    return router;
};


module.exports = (app) => {

  // catch 404 and forwarding to error handler

  app.use(getDomainRouter());
};
