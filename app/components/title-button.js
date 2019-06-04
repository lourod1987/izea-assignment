import Component from '@ember/component';

// set up each component title button to hide/show modalinfo component based on the display bool value
export default Component.extend({
  display: false,

  actions: {
    revealModal() {
      this.toggleProperty('display');
    }
  },
});
