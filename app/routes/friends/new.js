import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('friend');
  },

  activate: function() {
    console.log('*** routes/friends/new#activate');
  },

  deactivate: function() {
    console.log('*** routes/friends/new#deactivate');
  },

  actions: {
    save: function() {
      console.log('+-- save action in friends new route');
      return true;
    },
    cancel: function() {
      console.log('+-- cancel action in friends new route');
      return true;
    },
  }
});
