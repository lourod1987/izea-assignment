import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('page-not-found', {
    path: '/*wildcard'
  });
  this.route('page2');
  this.route('page3');
  this.route('page4');
  this.route('page5');
});

export default Router;
