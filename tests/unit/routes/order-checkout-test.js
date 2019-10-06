import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | order-checkout', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:order-checkout');
    assert.ok(route);
  });
});
