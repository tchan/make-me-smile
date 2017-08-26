import Ember from 'ember';
import DS from 'ember-data';

const { set, get, computed, inject } = Ember;
const { PromiseObject } = DS;

export default Ember.Controller.extend({
  ajax: inject.service(),
  showCards: false,
  isLoading: false,
  postArray: Ember.A([]),
  //
  // redditPostsArrayPromise: computed('showCards', function() {
  //   console.log('showCard is true');
  //   var promise = this.get('ajax').request('https://www.reddit.com/r/aww.json').then(object => object.data.children);
  //   return PromiseObject.create({
  //     promise: promise
  //   });
  // }),
  //
  // redditPostsArray: computed.reads('redditPostsArrayPromise.content'),

  actions: {
    populateCard: function() {
      this.set('showCards', true);
      this.set('isLoading', true);
      var promise = this.get('ajax').request('https://www.reddit.com/r/aww.json').then(object => {
        set(this, 'postArray', object.data.children);
      })
      .finally(() => set(this, 'isLoading', false));

    }
  }
});
