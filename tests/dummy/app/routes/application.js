import Ember from 'ember';
import PostgRESTRouteMixin from 'ember-postgrest-dynamic-ui/mixins/postgrest-route';

const {
  Route,
  RSVP,
  get,
  inject
} = Ember;

export default Route.extend(PostgRESTRouteMixin, {
  model() {
    return RSVP.hash({
      tables: this.getTables()
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties(model);
  }

});
