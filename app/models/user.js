import DS from 'ember-data';
const { Model, attr, hasMany } = DS;


// set up data types received for user call and relationship to post
export default Model.extend({
  name: attr('string'),
  username: attr('string'),
  email: attr('string'),
  phone: attr('string'),
  website: attr('string'),

  post: hasMany('post'),
});
