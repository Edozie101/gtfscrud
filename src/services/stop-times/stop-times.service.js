// Initializes the `stop_times` service on path `/stop-times`
const createService = require('feathers-mongoose');
const createModel = require('../../models/stop-times.model');
const hooks = require('./stop-times.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/stop-times', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('stop-times');

  service.hooks(hooks);
};
