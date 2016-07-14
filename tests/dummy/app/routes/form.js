import Ember from 'ember';
import PostgRESTRouteMixin from 'ember-postgrest-dynamic-ui/mixins/postgrest-route';

const {
  RSVP,
  get,
  set,
  inject
} = Ember;

export default Ember.Route.extend(PostgRESTRouteMixin, {
  model(params) {
    return RSVP.hash({
      options: this.getOptions(params.table_name),
      record: this.getRecord(params.table_name, params.id),
      template: this.getTemplate(params.table_name, params.template)
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties(model);
    set(controller, 'fields', this.setupFields(model));
  }

});
