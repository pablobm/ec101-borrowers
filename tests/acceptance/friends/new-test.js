import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'borrowers/tests/helpers/start-app';

var application;

module('Acceptance | friends/new', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /friends/new', function(assert) {
  visit('/friends/new');

  andThen(function() {
    assert.equal(currentURL(), '/friends/new');
  });
});

test("Creating a new friend", function(assert) {
  visit('/');
  click('a[href="/friends/new"]');
  andThen(function() {
    assert.equal(currentPath(), 'friends.new');
  });

  fillIn('input[placeholder="First name"]', 'Pinky');
  fillIn('input[placeholder="Last name"]', 'Winky');
  fillIn('input[placeholder="Email"]', 'pinky.winky@seriousbusiness.com');
  fillIn('input[placeholder="Twitter"]', 'pwinky');
  click('input[value="Save"]');

  andThen(function() {
    assert.equal(currentRouteName(), 'friends.show.index', "Redirects to friends.show after create");
  });
});

test("Clicking save without filling fields", function(assert) {
  visit('/friends/new');
  click('input[value="Save"]');
  andThen(function() {
    assert.equal(currentRouteName(), 'friends.new', "Stays on new page");
    assert.equal(find('h2:contains(You have to fill all the fields)').length, 1, "Displays error message");
  });
});
