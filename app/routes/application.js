import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
    cart: service('shopping-cart'),
    model() {
        return hash({
            totalItems: this.cart.getTotalItems()
        })
    }
});
