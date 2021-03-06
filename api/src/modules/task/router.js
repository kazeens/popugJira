const express = require('express');

let controller = require('src/modules/task/controller');

let router = new express.Router();

router.param('id', controller.idParamMiddleware);

router.post('/', controller.createTask);

router.put('/:id', controller.updateTask);

router.get('/:id', controller.getTask);

module.exports = router;