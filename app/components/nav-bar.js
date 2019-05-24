import Component from '@ember/component';
import { inject } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  init: function() {
    this._super();
    this.updateValues();
 },
  pageNumber: '1',
  first: 'index',
  prev: 'index',
  next: 'page2',
  last: 'page5',
  isFirstPage: false,
  isLastPage: false,
  routing: inject('-routing'),
  currentPage: computed('routing.currentRouteName', function() {
    return this.get('routing.currentRouteName');
  }),

  updateValues: function () {
    let page = this.currentPage;
    switch(page) {
      case "index":
        this.set('pageNumber', '1');
        this.set('first', null);
        this.set('prev', null);
        this.set('next', 'page2');
        this.set('isFirstPage', true);
        break;
      case "page2":
          this.set('pageNumber', '2');
          this.set('prev', 'index');
          this.set('next', 'page3');
        break;
      case "page3":
          this.set('pageNumber', '3');
          this.set('prev', 'page2');
          this.set('next', 'page4');
        break;
      case "page4":
          this.set('pageNumber', '4');
          this.set('prev', 'page3');
          this.set('next', 'page5');
        break;
      case "page5":
          this.set('pageNumber', '5');
          this.set('prev', 'page4');
          this.set('next', null);
          this.set('last', null);
          this.set('isLastPage', true);
        break;
    }
  },
  actions: {
    onPageChange() {
      this.updateValues();
    },
  },
})

