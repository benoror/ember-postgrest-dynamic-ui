import Ember from 'ember';

const {
  get,
  inject
} = Ember;

export default Ember.Mixin.create({
  postgrest: inject.service(),

  getTables() {
    return get(this, 'postgrest').request('/');
  },

  getOptions(table_name) {
    return get(this, 'postgrest').request(`/${table_name}`, {
      method: 'OPTIONS'
    });
  },

  getRecords(table_name) {
    return get(this, 'postgrest').request(`/${table_name}`);
  },

  getRecord(table_name, id) {
    return get(this, 'postgrest').request(`/${table_name}?id=eq.${id}`, {
      headers: {
        'Prefer': 'plurality=singular'
      }
    });
  },

  setupFields(model) {
    return model.fields || model.options.columns.map((field) => {
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
  }
});
