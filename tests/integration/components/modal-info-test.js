import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | modal-info', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    let text = `Name: 
    Username: 
    Phone: 
    Email: 
    Website:`;
    await render(hbs`<ModalInfo />`);

    assert.equal(this.element.textContent.trim(), text);

    // Template block never used so test was removed
  });
});
