// Initializes the `calendar` service on path `/calendar`
const createService = require('feathers-mongoose');
const createModel = require('../../models/calendar.model');
const hooks = require('./calendar.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/calendar', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('calendar');

  service.hooks(hooks);
};
