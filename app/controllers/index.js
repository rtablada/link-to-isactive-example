import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  router: service(),
  sort: 'quantity',
  filter: 'value:gte=3',
  queryParams: ['sort', 'filter'],

  // This should return true if index route is active
  // and sort=quantity (no qp in url because of default)
  // the value of the filter QP should not impact the result of isActive
  isSortQuantityActive: computed('router.currentURL', function() {
    return this.router.isActive('index', { queryParams: {
      sort: 'quantity'
    }});
  }),

  // This should return true if index route is active
  // and sort=date
  // the value of the filter QP should not impact the result of isActive
  isSortDateActive: computed('router.currentURL', function() {
    return this.router.isActive('index', { queryParams: {
      sort: 'date'
    }});
  }),

  // This should return true if index route is active
  // and sort=quantity (no qp in url because of default)
  // and filter="value:gte=3" (no qp in url because of default)
  // both QP values must be satisfied
  isSortQuantityAndFilterDefaultActive: computed('router.currentURL', function() {
    return this.router.isActive('index', { queryParams: {
      sort: 'quantity',
      filter: 'value:gte=3',
    }});
  }),
});
