import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
 model(){
    return hash({
        products: this.store.findAll('product'),
        baskets: this.store.findAll('basket'),
    })
 },
})

