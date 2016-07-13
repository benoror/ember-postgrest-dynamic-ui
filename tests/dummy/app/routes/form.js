import Ember from 'ember';

const {
  RSVP,
  get,
  set,
  inject
} = Ember;

export default Ember.Route.extend({
  postgrest: inject.service(),

  model(params) {
    return RSVP.hash({
      options: get(this, 'postgrest').request(`/${params.table_name}`, {
        method: 'OPTIONS'
      }),
      record: get(this, 'postgrest').request(`/${params.table_name}?id=eq.${params.id}`, {
        headers: {
          'Prefer': 'plurality=singular'
        }
      })
      // fields: [
      //   {
      //     key: 'title',
      //     type: 'input',
      //     templateOptions: {
      //       type: 'text',
      //       label: 'El Titulo'
      //     }
      //   },
      //   {
      //     key: 'director',
      //     type: 'input',
      //     templateOptions: {
      //       type: 'text',
      //       label: 'El Mero Mero Director'
      //     }
      //   }
      // ]
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties(model);
    const fields = model.fields || model.options.columns.map((field) => {
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
