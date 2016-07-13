import Ember from 'ember';
import PostgRESTRouteMixin from 'ember-postgrest-dynamic-ui/mixins/postgrest-route';

const {
  RSVP,
  get,
  inject
} = Ember;

export default Ember.Route.extend(PostgRESTRouteMixin, {
  model(params) {
    return RSVP.hash({
      table_name: params.table_name,
      options: this.getOptions(params.table_name),
      records: this.getRecords(params.table_name)
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties(model);
    set(controller, 'fields', this.setupFields(model));
  }

});
