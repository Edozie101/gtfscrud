const assert = require('assert');
const app = require('../../src/app');

describe('\'Stops\' service', () => {
  it('registered the service', () => {
    const service = app.service('stops');

    assert.ok(service, 'Registered the service');
  });
});
