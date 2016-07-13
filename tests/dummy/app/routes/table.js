import Ember from 'ember';

const {
  RSVP,
  get,
  inject
} = Ember;

export default Ember.Route.extend({
  postgrest: Ember.inject.service(),

  model(params) {
    return RSVP.hash({
      table_name: params.table_name,
      options: get(this, 'postgrest').request(`/${params.table_name}`, {
        method: 'OPTIONS'
      }),
      records: get(this, 'postgrest').request(`/${params.table_name}`)
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties(model);
  }

});
