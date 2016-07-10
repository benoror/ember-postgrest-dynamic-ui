import Ember from 'ember';

const {
  RSVP,
  get,
  set
} = Ember;

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model(params) {
    return RSVP.hash({
      options: get(this, 'ajax')
        .request(`http://localhost:3000/${params.table_name}`, {
          method: 'OPTIONS'
        }),
      record: get(this, 'ajax')
        .request(`http://localhost:3000/${params.table_name}?id=eq.${params.id}`, {
          headers: {
            'Prefer': 'plurality=singular'
          }
        })
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties(model);
    const fields = model.options.columns.map((field) => {
      return {
        key: field.name,
        type: 'input', //field.type
        templateOptions: {
          type: 'text',
          label: Ember.String.capitalize(field.name),
          placeholder: Ember.String.capitalize(field.name)
        }
      };
    });
    set(controller, 'fields', fields);
  }

});
