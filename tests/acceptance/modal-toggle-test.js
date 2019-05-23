import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | modal toggle', function(hooks) {
  setupApplicationTest(hooks);

  test('should toggle open modal and still be on same page', async function(assert) {
    
    await visit('/');
    await click('button.title-button');
    assert.ok(document.querySelector('p.post-body'));
    assert.equal(currentURL(), '/');
  });
});
