import { test } from 'qunit';
import moduleForAcceptance from 'make-me-smile/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | button');

test('visiting index and resting state displays correctly', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(find('#populateButton').text().trim(), 'Make me smile', 'button is displaying correctly at resting state');
  });
});
