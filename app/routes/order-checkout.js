import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
    cart: service('shopping-cart'),
    model() {
        return hash({
            baskets: this.store.findAll('basket'),
            discount: this.cart.getTotalDiscount(),
            totalPriceAfterDiscount: this.cart.getTotalPriceAfterDiscount()
        })
    }
});
