import { test } from 'qunit';
import moduleForAcceptance from 'make-me-smile/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | button');

test('visiting index and resting states displays correctly', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(find('#hot').text().trim(), 'hot', 'hot button is displaying correctly at resting state');
    assert.equal(find('#new').text().trim(), 'new', 'new button is displaying correctly at resting state');
    assert.equal(find('#rising').text().trim(), 'rising', 'rising button is displaying correctly at resting state');
    assert.equal(find('#controversial').text().trim(), 'controversial', 'controversial button is displaying correctly at resting state');
    assert.equal(find('#top').text().trim(), 'top', 'top button is displaying correctly at resting state');
  });
});
