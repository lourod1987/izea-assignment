import DS from 'ember-data';

//serialize data so that app can use retrieved data from user
export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      users: payload
    };
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
});
