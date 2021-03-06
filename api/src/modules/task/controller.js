
let repository = require('src/modules/task/repository');

module.exports = {
    idParamMiddleware,
    createTask,
    updateTask,
    getTask,
}

function idParamMiddleware(req, res, next) {
  return repository.findOne(req.params.id)
      .then((task) => {
          if (!task) {
              res.notFound();
          } else {
              // eslint-disable-next-line no-param-reassign
              res.locals.task = task;
              next();
          }
      })
      .catch(next);
}

function getTask(req, res, next) {
    let { query } = req;

    return repository.findOne(query)
        .then(res.success)
        .catch(next)
}

function createTask(req, res, next) {
    let { body } = req;

    return repository.create(body)
        .then(res.success)
        .catch(next)
}

function updateTask(req, res, next) {
    let { body } = req;

    return repository.update(body)
        .then(res.success)
        .catch(next)
}