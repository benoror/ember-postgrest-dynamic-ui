import Ember from 'ember';

const {
  Route,
  RSVP,
  get,
  inject
} = Ember;

export default Route.extend({
  postgrest: inject.service(),

  model() {
    return RSVP.hash({
      tables: get(this, 'postgrest').request('/')
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties(model);
  }

});
