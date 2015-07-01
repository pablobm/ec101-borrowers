import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('friend', 'Unit | Model | friend', {
  // Specify the other units that are required for this test.
  needs: ['model:article'],
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test("fullName joins first and last name", function(assert) {
  var model = this.subject({firstName: "Paquito", lastName: "Chocolatero"});
  assert.equal(model.get('fullName'), "Paquito Chocolatero");

  Ember.run(function() {
    model.set('firstName', "Manolito");
  });

  assert.equal(model.get('fullName'), "Manolito Chocolatero", "Updates fullName");
});

test("articles relationship", function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('articles');

  assert.equal(relationship.key, 'articles');
  assert.equal(relationship.kind, 'hasMany');
});
