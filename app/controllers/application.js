import Ember from 'ember';
import DS from 'ember-data';
const { inject, observer } = Ember;
const { PromiseArray } = DS;
export default Ember.Controller.extend({
  ajax: inject.service(),
  queryParams: ['view'],
  view: null,
  categories: ['hot', 'new', 'rising', 'controversial', 'top'],

  postArrayPromise: observer('view', function() {
    let category = this.get('view');
    if (category) {
      let promise = this.get('ajax').request(`https://www.reddit.com/r/aww/${category}.json`).then(object => {
        return object.data.children;
      });
      this.set('postArrayContent', PromiseArray.create({ promise }));
    } else {
      this.set('postArrayContent',  Ember.A([]));
    }
  }),

  postArrayContent: []
});
