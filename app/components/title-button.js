import Component from '@ember/component';

export default Component.extend({
  display: false,

  actions: {
    revealModal() {
      this.toggleProperty('display');
    }
  },
});
