import Ember from 'ember';

const {
  get,
  inject
} = Ember;

export default Ember.Mixin.create({
  postgrest: inject.service(),

  getTables() {
    return get(this, 'postgrest').request('/').then((tables) => {
      return tables.filter((table) => table.name.indexOf('meta_') !== 0);
    });
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

  getTemplates(table_name) {
    return get(this, 'postgrest')
      .request(`/meta_fields_templates?table_name=eq.${table_name}`);
  },

  getTemplate(table_name, template) {
    if(template === 'default') {
      return undefined;
    }

    return get(this, 'postgrest')
      .request(`/meta_fields_templates?table_name=eq.${table_name}&id=eq.${template}`, {
        headers: {
          'Prefer': 'plurality=singular'
        }
      }).then((row) => row.template);
    // return get(this, 'postgrest')
    //   .request(`/templates/${table_name}/${id}.json`);
  },

  setupFields(model) {
    return model.template || model.options.columns.map((field) => {
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
