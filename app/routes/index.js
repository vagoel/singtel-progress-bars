import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this._super(...arguments);
    this.transitionTo('progress-bar');
  }
});
