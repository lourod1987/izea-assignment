import { module, test } from 'qunit';
import { visit, currentURL, currentRouteName, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | lost page', function(hooks) {
  setupApplicationTest(hooks);

  test('any page visited not in router should lead to page-not-found. Button on page-not-found should lead back to main page', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
    await visit('/test');
    assert.equal(currentRouteName(), 'page-not-found');
    await visit('/new-test');
    assert.equal(currentRouteName(), 'page-not-found');
    await visit('/2');
    assert.equal(currentRouteName(), 'page-not-found');
    await click('button');
    assert.equal(currentURL(), '/');
  });
});
