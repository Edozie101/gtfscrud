const stops = require('./stops/stops.service.js');
const agency = require('./agency/agency.service.js');
const routes = require('./routes/routes.service.js');
const trips = require('./trips/trips.service.js');
const stopTimes = require('./stop-times/stop-times.service.js');
const calendar = require('./calendar/calendar.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(stops);
  app.configure(agency);
  app.configure(routes);
  app.configure(trips);
  app.configure(stopTimes);
  app.configure(calendar);
};
