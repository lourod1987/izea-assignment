import Route from '@ember/routing/route';
import { set } from '@ember/object';

// use query to call just the first page from jsonplaceholder api and limit results to 20 per page
// setupController used to rename model to posts
export default Route.extend({
  model() {
    return this.store.query('post', { _page: 1, _limit: 20 });
  },
  setupController(controller, model) {
    set(controller, 'posts', model)
  },
});

