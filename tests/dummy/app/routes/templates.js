import Ember from 'ember';
import PostgRESTRouteMixin from 'ember-postgrest-dynamic-ui/mixins/postgrest-route';

const {
  RSVP,
  set,
  computed
} = Ember;

export default Ember.Route.extend(PostgRESTRouteMixin, {
  model(params) {
    return RSVP.hash({
      table_name: params.table_name,
      options: this.getOptions('meta_fields_templates'),
      records: this.getTemplates(params.table_name)
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties(model);
    set(controller, 'fields', this.setupFields(model));
  }

});
