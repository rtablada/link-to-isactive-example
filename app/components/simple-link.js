import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: '',
  router: service(),

  url: computed('routeName', 'queryParams', 'router.currentURL', function() {
    return this.router.urlFor(this.routeName, { queryParams: Object.assign({}, this.queryParams)});
  }),

  isActive: computed('routeName', 'queryParams', 'router.currentURL', function() {
    return this.router.isActive(this.routeName, { queryParams: Object.assign({}, this.queryParams)});
  }),

  actions: {
    navigate(ev) {
      ev.preventDefault();

      return this.router.transitionTo(this.routeName, { queryParams: Object.assign({}, this.queryParams)});
    }
  }
});

