import Ember from 'ember';
const { set, inject, computed } = Ember;
export default Ember.Component.extend({
  ajax: inject.service(),
  isLoading: false,
  isHovered: false,
  hoverClass: computed('isHovered', function () {
    let isHovered = this.get('isHovered');
    if (isHovered) {
      return 'hover';
    } else {
      return '';
    }
  }),

  actions: {
    populateCard: function(category) {
      this.set('showCards', true);
      this.set('isLoading', true);
      this.get('ajax').request(`https://www.reddit.com/r/aww/${category}.json`).then(object => {
        set(this, 'postArray', object.data.children);
      })
      .catch(() => {
        alert('An error has occured');
      })
      .finally(() => set(this, 'isLoading', false));
    }
  }
});
