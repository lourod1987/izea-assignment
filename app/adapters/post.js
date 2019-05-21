import JSONPlaceholder from './jsonplaceholder';

export default JSONPlaceholder.extend({
  pathForType() {
    return 'posts?_page=1';
  }
});
