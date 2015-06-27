import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      console.log('+--- save action in friends route');
      return true;
    },

    cancel: function() {
      console.log('+--- cancel action in friends route');
      return false;
    },

    delete: function(friend) {
      var _this = this;
      friend.destroyRecord().then(function() {
        _this.transitionTo('friends.index');
      });
    }
  }
});
