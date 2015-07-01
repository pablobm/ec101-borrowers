import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('articles/article-row', 'Unit | Component | articles/article row', {
  needs: ['helper:formatted-date'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  var article = Ember.Object.create();

  // Creates the component instance
  var component = this.subject({article});
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
