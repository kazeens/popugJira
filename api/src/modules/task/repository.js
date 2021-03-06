const Task = require('src/modules/task/model');
const { buildQuery } = require('src/modules/task/query.builder');

module.exports = {
  findOne,
  create,
  update,
}

function findOne(query) {
  return Task
    .findOne(buildQuery(query))
    .then(cleanUp);
}

function create(data) {
  const task = new Task(data);

  return task
    .save()
    .then(cleanUp);
}

function update(query, data) {
  return Task
      .findOneAndUpdate(buildQuery(query), data)
      .then(() => findOne(buildQuery(query)));
}

function cleanUp(task) {
  if (!task) {
      return task;
  }

  return task.toJSON();
};
