import Ember from 'ember';

const { set, inject, computed } = Ember;

export default Ember.Controller.extend({
  ajax: inject.service(),
  showCards: false,
  isLoading: false,
  isHovered: false,
  hoverClass: computed('isHovered', function(){
    let isHovered = this.get('isHovered');
    if (isHovered) {
      return 'hover';
    } else {
      return '';
    }
  }),
  postArray: Ember.A([]),

  actions: {
    populateCard: function() {
      this.set('showCards', true);
      this.set('isLoading', true);
      this.get('ajax').request('https://www.reddit.com/r/aww.json').then(object => {
        set(this, 'postArray', object.data.children);
      })
      .catch(() => {
        alert('An error has occured');
      })
      .finally(() => set(this, 'isLoading', false));

    }
  }
});
