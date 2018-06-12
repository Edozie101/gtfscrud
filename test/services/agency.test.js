const assert = require('assert');
const app = require('../../src/app');

describe('\'agency\' service', () => {
  it('registered the service', () => {
    const service = app.service('agency');

    assert.ok(service, 'Registered the service');
  });
});
