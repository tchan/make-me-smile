import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
moduleForComponent('post-category', 'Integration | Component | post category', {
  integration: true
});

test('loading class is active when isLoading is set to true', function(assert) {

  //this is shit, not sure how to do this properly...
  this.set("category", "hot");
  this.set("view", "hot");
  this.set('postArray', []);
  // Tests hot button exists
  this.render(hbs`{{post-category id=category view=view postArray=postArray}}`);
  assert.equal(this.$('button').text().trim(), 'hot');

  // Test class loader exists when isLoading is true
  this.set('isLoading', true);
  this.render(hbs`{{post-category id=category view=view postArray=postArray isLoading=isLoading}}`);
  assert.equal(this.$('button .loader').hasClass('loader'), true, 'has loading class');

  // Test class loader does not exist when isLoading is false
  this.set('isLoading', false);
  this.render(hbs`{{post-category id=category view=view postArray=postArray isLoading=isLoading}}`);
  assert.equal(this.$('button .loader').hasClass('loader'), false, 'does not has loading class');
});
