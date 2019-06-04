import JSONPlaceholder from './jsonplaceholder';

// extend jsonplaceholder since data needs to be fetched from 2 different paths
export default JSONPlaceholder.extend({
  pathForType() {
    return 'users';
  },
});
