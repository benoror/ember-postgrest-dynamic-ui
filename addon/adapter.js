import DS from "ember-data";

export default DS.RESTAdapter.extend({
  buildURL(modelName, id, snapshot, requestType, query) {
    const newModelNAme = id;
    return this._super(newModelNAme, undefined, snapshot, requestType, query);
  }

  // pathForType: function(modelName) {
  //   return modelName;
  // }
});
