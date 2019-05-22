import Route from '@ember/routing/route';
import { set } from '@ember/object';

export default Route.extend({
  model() {
    return this.store.query('post', { _page: 1, _limit: 20 });
  },
  setupController(controller, model) {
    set(controller, 'posts', model)
  },
});

