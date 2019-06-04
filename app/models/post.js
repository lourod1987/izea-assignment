import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

// set up data types received for post call and relationship to user
export default Model.extend({
  title: attr('string'),
  body: attr('string'),

  userId: belongsTo('user'),
});
