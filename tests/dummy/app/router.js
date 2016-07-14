import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('table', { path: '/table/:table_name/:template' });
  this.route('templates', { path: '/templates/:table_name' });
  this.route('form', { path: '/form/:table_name/:template/:id' });
});

export default Router;
