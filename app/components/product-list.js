import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service('store'),
    actions: {
        addToBasket(product) {
            // add to store
            this.store.createRecord('basket', product);
            // trigger action on parent component
            this.onConfirm({price: product.get('price')});
        },
    }
});
