import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    productCounter: 0,
    productPriceBasket: 0,
    cart: service('shopping-cart'),
    // controller
    actions: {
      addedItemToBasket() {
          this.set('productCounter', this.cart.getTotalItems());
          this.set('productPriceBasket', this.cart.getTotalPrice());
      }
    }
});


