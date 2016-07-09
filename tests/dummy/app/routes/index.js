import Ember from 'ember';

const {
  get,
  set
} = Ember;

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model() {
    const tables = get(this, 'ajax').request('http://localhost:3000/');
    return set(this, 'tables', tables);
  }

});
