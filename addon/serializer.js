import Ember from 'ember';
import DS from 'ember-data';

// const inflector = new Ember.Inflector();

export default DS.JSONSerializer.extend({
  // normalizeResponse(store, type, payload) {
    //  const modelNamePlural = inflector.pluralize(type.modelName);
    // const newPayload = { payload: payload };
    // console.log(newPayload);

  //
  //   if(payload.records) {
  //     payload[modelNamePlural] = payload.records;
  //     delete payload.records;
  //
  //     payload.meta = {
  //       offset: payload.offset
  //     };
  //     delete payload.offset;
  //
  //     payload[modelNamePlural].forEach((record) => {
  //       Ember.merge(record, record.fields);
  //       delete record.fields;
  //       record.created = record.createdTime;
  //       delete record.createdTime;
  //     });
  //   } else {
  //     payload[type.modelName] = payload.fields;
  //     payload[type.modelName].id = payload.id;
  //     payload[type.modelName].created = payload.createdTime;
  //     delete payload.id;
  //     delete payload.fields;
  //     delete payload.createdTime;
  //   }
  //
    // return this._super(store, type, payload);
  // }
});
