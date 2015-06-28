import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('date'),
  description: DS.attr('string'),
  nodes: DS.attr('string'),
  state: DS.attr('string'),
  friend: DS.belongsTo('friend'),
});
