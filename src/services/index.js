const stops = require('./stops/stops.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(stops);
};
