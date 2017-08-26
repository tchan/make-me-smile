import { test } from 'qunit';
import moduleForAcceptance from 'make-me-smile/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | button');

test('visiting index and hover triggers hover state', function(assert) {
  visit('/');
  // triggerEvent('button', 'hover');
  // triggerEvent hover/mouseEnter does not work
  andThen(function() {
    assert.equal(currentURL(), '/');
    let button = find('#populateButton');
    button.mouseenter();
  });
  andThen(function() {
    let button = find('#populateButton');
    assert.equal(button.text().trim(), 'Click and you will smile', 'Correct text displayed');
    assert.equal(button.hasClass('hover'), true, 'Button has correct class');
});
});
