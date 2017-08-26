import Ember from 'ember';

const { set, inject, computed } = Ember;

export default Ember.Controller.extend({
  ajax: inject.service(),
  categories: ['hot', 'new', 'rising', 'controversial', 'top'],
  showCards: false,
  postArray: Ember.A([]),

  actions: {


  }
});
