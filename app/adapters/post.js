import JSONPlaceholder from './jsonplaceholder';

export default JSONPlaceholder.extend({
  pathForType() {
    return 'posts';
  },
});
