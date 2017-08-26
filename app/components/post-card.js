import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: true,
  userProfileLink: Ember.computed('post.data.author', function() {
    let post = this.get('post');
    return `https://www.reddit.com/user/${post.data.author}`
  }),
  redditPermalink: Ember.computed('post.data.permalink', function() {
    let permalink = this.get('post.data.permalink');
    return `https://www.reddit.com/${permalink}`;
  }),
  actions: {
    toggleOpen() {
      this.toggleProperty('isOpen');
    }
  }
});
