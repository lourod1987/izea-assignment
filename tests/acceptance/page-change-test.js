import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | page change', function(hooks) {
  setupApplicationTest(hooks);

  test('navigation buttons should work and pages should load', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
    await click('button#next');
    assert.equal(currentURL(), '/page2');
    await click('button#next');
    assert.equal(currentURL(), '/page3');
    await click('button#next');
    assert.equal(currentURL(), '/page4');
    await click('button#next');
    assert.equal(currentURL(), '/page5');
    
    await click('button#prev');
    assert.equal(currentURL(), '/page4');
    await click('button#prev');
    assert.equal(currentURL(), '/page3');
    await click('button#prev');
    assert.equal(currentURL(), '/page2');
    await click('button#prev');
    assert.equal(currentURL(), '/');

    await click('button#last');
    assert.equal(currentURL(), '/page5');
    
    await click('button#disabled-last');
    assert.equal(currentURL(), '/page5');
    await click('button#disabled-next');
    assert.equal(currentURL(), '/page5');
    

    await click('button#first');
    assert.equal(currentURL(), '/');

    await click('button#disabled-first');
    assert.equal(currentURL(), '/');
    await click('button#disabled-prev');
    assert.equal(currentURL(), '/');
  });
});
