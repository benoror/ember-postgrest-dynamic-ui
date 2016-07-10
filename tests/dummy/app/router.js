import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('table', { path: '/table/:table_name' });
  this.route('form', { path: '/form/:table_name/:id' });
});

export default Router;
