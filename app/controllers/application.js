import Ember from 'ember';
import DS from 'ember-data';
const { inject, computed } = Ember;
const { PromiseArray } = DS;
export default Ember.Controller.extend({
  ajax: inject.service(),
  queryParams: ['view'],
  view: null,
  categories: ['hot', 'new', 'rising', 'controversial', 'top'],

  postArrayPromise: computed('view', function() {
    let category = this.get('view');
    if (category) {
      let promise = this.get('ajax').request(`https://www.reddit.com/r/aww/${category}.json`).then(object => {
        return object.data.children;
      });
      return PromiseArray.create({ promise });
    } else {
      return Ember.A([]);
    }
  }),
  
  postArrayContent: computed.reads('postArrayPromise.content')
});
