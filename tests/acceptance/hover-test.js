import { test } from 'qunit';
import moduleForAcceptance from 'make-me-smile/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | button');

test('visiting index and hover triggers hover state for each button', function(assert) {
  visit('/');
  let categories = ['hot', 'new', 'rising', 'controversial', 'top'];

  categories.forEach(function(category) {
    andThen(function() {
    assert.equal(find(`button#${category}`).length, 1, `${category} button exists`);
    });
    andThen(function() {
      let button = find(`button#${category}`);
      button.mouseenter();
    });
    andThen(function() {
      let button = find(`button#${category}`);
      assert.equal(button.text().trim(), 'Click me!', `${category} button has correct text when hovered`);
      assert.equal(button.hasClass('hover'), true, `${category} button has correct class when hovered`);
    });
  });
});
