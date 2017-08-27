import Ember from 'ember';

export default Ember.Component.extend({
  mouseEnter() {
    this.set('isHovered', true);
  },
  mouseLeave() {
    this.set('isHovered', false);
  }
});
