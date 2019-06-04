import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

// test all navigation actions work
module('Acceptance | page change', function(hooks) {
  setupApplicationTest(hooks);

  test('navigation buttons should work and pages should load', async function(assert) {
    // forward through pages
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
    
    // back through pages
    await click('button#prev');
    assert.equal(currentURL(), '/page4');
    await click('button#prev');
    assert.equal(currentURL(), '/page3');
    await click('button#prev');
    assert.equal(currentURL(), '/page2');
    await click('button#prev');
    assert.equal(currentURL(), '/');

    // to last page
    await click('button#last');
    assert.equal(currentURL(), '/page5');
    // last and next button do not lead to any other route when on last page
    await click('button#disabled-last');
    assert.equal(currentURL(), '/page5');
    await click('button#disabled-next');
    assert.equal(currentURL(), '/page5');
    
    // to first page
    await click('button#first');
    assert.equal(currentURL(), '/');

    // first and prev button do not lead to any other route when on first (index) page
    await click('button#disabled-first');
    assert.equal(currentURL(), '/');
    await click('button#disabled-prev');
    assert.equal(currentURL(), '/');
  });
});
