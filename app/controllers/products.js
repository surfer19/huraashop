import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default Controller.extend({
    @tracked productCounter: 0,
    @tracked productPriceBasket: 0,
    cart: service('shopping-cart'),
    // controller
    actions: {
      addedItemToBasket(totalPrice) {
          this.set('productCounter', this.cart.getTotalItems());
          this.set('productPriceBasket', this.cart.getTotalPrice());
      }
    }
});


