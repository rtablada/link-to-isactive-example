import { module, test } from 'qunit';
import { visit, click, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

function loadPage() {
  return {
    simpleLinks: {
      sortDefault: find('[data-test-simple=sort-quantity]'),
      sortDate: find('[data-test-simple=sort-date]'),
      sortDefaultFilterDefault: find('[data-test-simple=sort-quantity-filter-default]'),
      sortDateFilterDefault: find('[data-test-simple=sort-date-filter-default]'),
      sortDateFilterDifferent: find('[data-test-simple=sort-date-filter-different]'),
    },
    linkTos: {
      sortDefault: find('[data-test-link-to=sort-quantity]'),
      sortDate: find('[data-test-link-to=sort-date]'),
      sortDefaultFilterDefault: find('[data-test-link-to=sort-quantity-filter-default]'),
      sortDateFilterDefault: find('[data-test-link-to=sort-date-filter-default]'),
      sortDateFilterDifferent: find('[data-test-link-to=sort-date-filter-different]'),
    }
  };
}

module('Acceptance | index active test', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting index with no qps should show active on default links', async function(assert) {
    await visit('/');
    let { simpleLinks, linkTos } = loadPage();

    assert.ok(simpleLinks.sortDefault.classList.contains('active'),
      'The sortDefault simple link should be active when qps are default value');
    assert.ok(linkTos.sortDefault.classList.contains('active'),
      'The sortDefault link to should be active when qps are default value');
    assert.ok(simpleLinks.sortDefaultFilterDefault.classList.contains('active'),
      'The sortDefaultFilterDefault simple link should be active when qps are default value');
    assert.ok(linkTos.sortDefaultFilterDefault.classList.contains('active'),
      'The sortDefaultFilterDefault link to should be active when qps are default value');
  });

  test('clicking on the links should make them active', async function(assert) {
    await visit('/');
    let { simpleLinks, linkTos } = loadPage();

    await click(simpleLinks.sortDefault);
    assert.ok(simpleLinks.sortDefault.classList.contains('active'),
      'The sortDefault simple link should be active after clicking');
    assert.ok(linkTos.sortDefault.classList.contains('active'),
      'The sortDefault link to should be active after clicking');

    await click(simpleLinks.sortDate);
    assert.ok(simpleLinks.sortDate.classList.contains('active'),
      'The sortDate simple link should be active after clicking');
    assert.ok(linkTos.sortDate.classList.contains('active'),
      'The sortDate link to should be active after clicking');

    await click(simpleLinks.sortDefaultFilterDefault);
    assert.ok(simpleLinks.sortDefaultFilterDefault.classList.contains('active'),
      'The sortDefaultFilterDefault simple link should be active after clicking');
    assert.ok(linkTos.sortDefaultFilterDefault.classList.contains('active'),
      'The sortDefaultFilterDefault link to should be active after clicking');

    await click(simpleLinks.sortDateFilterDefault);
    assert.ok(simpleLinks.sortDateFilterDefault.classList.contains('active'),
      'The sortDateFilterDefault simple link should be active after clicking');
    assert.ok(linkTos.sortDateFilterDefault.classList.contains('active'),
      'The sortDateFilterDefault link to should be active after clicking');

    await click(simpleLinks.sortDateFilterDifferent);
    assert.ok(simpleLinks.sortDateFilterDifferent.classList.contains('active'),
      'The sortDateFilterDifferent simple link should be active after clicking');
    assert.ok(linkTos.sortDateFilterDifferent.classList.contains('active'),
      'The sortDateFilterDifferent link to should be active after clicking');
  });
});
