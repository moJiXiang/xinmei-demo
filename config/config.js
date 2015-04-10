var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'xinmei-demo'
    },
    port: 3200,
    db: 'mongodb://localhost/xinmei-demo-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'xinmei-demo'
    },
    port: 3200,
    db: 'mongodb://localhost/xinmei-demo-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'xinmei-demo'
    },
    port: 3200,
    db: 'mongodb://localhost/xinmei-demo-production'
  }
};

module.exports = config[env];
