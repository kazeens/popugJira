'use strict';

module.exports = {
  protocol: 'http',
  env: 'development',
  host: 'localhost',
  port: 3002,
  database: {
    mongodb: {
        host: 'popug_mongodb',
        port: 27017,
        sslEnabled: false,
        auth: false,
        user: null,
        password: null,
        dbName: 'pupug_db',
        replication: {
            enabled: false,
        },
    },
  },
};
