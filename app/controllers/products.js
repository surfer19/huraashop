import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default Controller.extend({
    @tracked productCounter: 0,
    @tracked productPriceBasket: 0,
    // controller
    actions: {
     addedItemToBasket(product) {
       this.set('productCounter', this.productCounter+1);
       this.set('productPriceBasket', this.productPriceBasket + product.price);
     }
   }
});
