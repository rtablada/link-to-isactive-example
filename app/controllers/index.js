import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  router: service(),
  sort: 'quantity',
  filter: 'value:gte=3',
  queryParams: ['sort', 'filter'],
});
