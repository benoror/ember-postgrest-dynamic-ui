import Ember from 'ember';

const {
  get,
  computed
} = Ember;

export default Ember.Component.extend({
  field: computed('record', 'column', function() {
    return get(this, 'record')[get(this, 'column').name];
  }),

  isInPKey: computed('options', 'column', function() {
    const pkey = get(this, 'options').pkey;
    return pkey.indexOf(get(this, 'column').name) > -1;
  })
});
