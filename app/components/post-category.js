import Ember from 'ember';
const { inject, computed } = Ember;
export default Ember.Component.extend({
  ajax: inject.service(),
  isHovered: false,
  view: null,
  isLoading: computed('view', 'postArray', function () {
    let view = this.get('view')
    let id = this.get('id');
    let postArray = this.get('postArray');

    if (view === id) {
      if (postArray) {
        return false;
      }
      return true;
    }

    else {
      return false;
    }
  }),

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
    }
  }
});
