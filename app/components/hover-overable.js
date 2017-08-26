import Ember from 'ember';

export default Ember.Component.extend({
  mouseEnter() {
    this.set('isHovered', true);
    // alert('hi');
  },
  mouseLeave() {
    this.set('isHovered', false);
  }
});
