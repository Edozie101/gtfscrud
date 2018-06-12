const assert = require('assert');
const app = require('../../src/app');

describe('\'stop_times\' service', () => {
  it('registered the service', () => {
    const service = app.service('stop-times');

    assert.ok(service, 'Registered the service');
  });
});
