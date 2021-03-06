import Component from '@ember/component';
import { inject } from '@ember/service';
import { computed } from '@ember/object';

// on page load check current route name and based on that value change the values of each property below
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
          this.set('isLastPage', true);
        break;
    }
  },
})

