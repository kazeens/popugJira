'use strict';

const mongoose = require('mongoose');
const db = require('src/db');
const { revertId } = require('src/utils/mongo.helper');
const { TASK_STATUSES } = require('src/modules/task/constants')

const modelName = 'Task';
const collectionName = 'tasks';

const mongooseSchema = new mongoose.Schema(
  {
      status: { type: String, enum: TASK_STATUSES, required: true},
      description: { type: String, default: "" },
      title: { type: String, required: true },
  },
  {
      versionKey: 'version',
      toJSON: {
          transform(doc, ret) {
              revertId(ret);
          },
      },
  }
);

const Task = db.model(modelName, mongooseSchema, collectionName);

module.exports = Task;
