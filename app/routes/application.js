import Ember from 'ember';
const { get, inject } = Ember;
export default Ember.Route.extend({
  ajax: inject.service(),
  model() {
    let ajax = get(this, 'ajax');
    return ajax.request('https://www.reddit.com/r/aww.json');
  }
});
