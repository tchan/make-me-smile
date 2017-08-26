import { test } from 'qunit';
import moduleForAcceptance from 'make-me-smile/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | button');

test('visiting index and resting states displays correctly', function(assert) {
  visit('/');
  let categories = ['hot', 'new', 'rising', 'controversial', 'top'];
  andThen(function() {
    categories.forEach(function(category) {
      assert.equal(find(`#${category}`).text().trim(), `${category}`, `${category} button is displaying correctly at resting state`);
    });
  });
});
