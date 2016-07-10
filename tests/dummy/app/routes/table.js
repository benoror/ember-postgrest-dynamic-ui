import Ember from 'ember';
import DS from 'ember-data';

const {
  RSVP,
  get
} = Ember;

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model(params) {
    return RSVP.hash({
      table_name: params.table_name,
      options: get(this, 'ajax')
        .request(`http://localhost:3000/${params.table_name}`, {
          method: 'OPTIONS'
        }),
      records: get(this, 'ajax')
        .request(`http://localhost:3000/${params.table_name}`)
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties(model);
  }

});
