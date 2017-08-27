import Ember from 'ember';
const { inject, computed } = Ember;
export default Ember.Component.extend({
  ajax: inject.service(),
  isHovered: false,
  view: null,
  isLoading: false,

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
      this.set('view', category);
      this.set('isLoading', true);
      this.get('ajax').request(`https://www.reddit.com/r/aww/${category}.json`).then(object => {
        this.set('postArrayContent', object.data.children);
      })
      .finally(() => {
      this.set('isLoading', false);
      });
    }
  }
});
