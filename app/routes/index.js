import Route from '@ember/routing/route';
import { set } from '@ember/object';

export default Route.extend({
  model() {
    return this.store.findAll('post');
  },
  setupController(controller, model) {
    set(controller, 'posts', model)
  }
});
