import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nav-bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    let text = `« First
    ˂ Prev
  Page 1 of 5
      
        Next ˃
      
      
        Last »`;

    await render(hbs`<NavBar />`);

    assert.equal(this.element.textContent.trim(), text);

    // Template block usage:
    // await render(hbs`
    //   <NavBar>
    //     template block text
    //   </NavBar>
    // `);

    // assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
