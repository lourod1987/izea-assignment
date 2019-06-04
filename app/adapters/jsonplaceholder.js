import DS from 'ember-data';

// use rest adapter to set up host
export default DS.RESTAdapter.extend({
  host: 'https://jsonplaceholder.typicode.com',
});
