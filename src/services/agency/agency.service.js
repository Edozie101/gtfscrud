// Initializes the `agency` service on path `/agency`
const createService = require('feathers-mongoose');
const createModel = require('../../models/agency.model');
const hooks = require('./agency.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/agency', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('agency');

  service.hooks(hooks);
};
