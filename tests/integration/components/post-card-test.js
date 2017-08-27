import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('post-card', 'Integration | Component | post card', {
  integration: true
});

test('post card test displaying correctly?', function(assert) {

  this.set('testCard', [{
    data: {
      title: 'test',
    }
  }][0]);
  // Template block usage:
  this.render(hbs`
    {{#post-card post=testCard}}
    {{/post-card}}
  `);

  assert.equal(this.$('div .title-bar').text().trim(), 'testV', 'title displaying correctly');
  assert.equal(this.$('div .text-center').text().trim(), 'Submitted at r/aww by', 'submission text displaying correctly');
});
