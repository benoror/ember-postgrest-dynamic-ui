import Ember from 'ember';

const {
  RSVP,
  get
} = Ember;

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model() {
    return RSVP.hash({
      tables: get(this, 'ajax').request('http://localhost:3000/')
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties(model);
  }

});
