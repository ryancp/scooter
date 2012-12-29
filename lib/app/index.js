var derby = require('derby'),
  app = derby.createApp(module),
  get = app.get;

derby.use(require('derby-ui-boot'));
derby.use(require('../../ui'));

require('./controllers/home');
require('./controllers/users');