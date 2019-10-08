import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    cart: service('shopping-cart'),
    store: service('store'),
    actions: {
        addToShoppingCart(product) {

            // add product to service
            // this.cart.add(product);
            const productId = product.get('id');
            const peekBasket = this.store.peekRecord('basket', productId)
            let discount = 0

            // if item.quantity >= 3 apply rule && item.title ==Strawb||Coffee
            // if ()
            // const discForThisItem = this.getDiscountByItemQuantity(product.get('title'), 1)
            // this.setTotalDiscount(discForThisItem)


            // 1. get quantity
            // 2. apply discount
            if (!peekBasket) {
                const record = {
                    id: productId,
                    quantity: 1,
                    quantityFree: product.get('title') === 'Green tea' ? 1 : 0,
                    title: product.get('title'),
                    price: product.get('price'),
                    applyDiscount: 0
                }
               this.store.createRecord('basket',record)
               this.cart.add(record)
               this.cart.setTotalPrice(product.get('price'))
               this.cart.setTotalItems(1)
               this.onConfirm()
            }
            else {
                // const currentQuantity = this.store.peekRecord('basket', productId).get('quantity')+1
                const basketQuantity = peekBasket.get('quantity') + 1;
                discount = this.getDiscountByItemQuantity(product.get('title'), basketQuantity)
                const freeItems = product.get('title') === 'Green tea' ? basketQuantity : 0
                // set discount
                this.store.findRecord('basket', productId, { backgroundReload: false }).then(item => {
                    this.cart.setTotalItems(basketQuantity)
                    this.cart.add(item)
                    this.cart.setTotalDiscount({discount: discount, title: product.get('title')})
                    this.cart.setTotalPrice(product.get('price'))
                    this.cart.setTotalPriceAfterDiscount()
                    item.incrementProperty('quantity');
                    item.set('applyDiscount', discount)
                    item.set('quantityFree', freeItems)
                    this.onConfirm()
                })
            }
        }
    },
    // get
    getDiscountByItemQuantity: (type, quantity) => {
        let discount = 0;
        switch(type) {
            case 'Strawberries':
                // 2/3 from original price
                if (quantity >= 3)
                    discount = 0.5 * quantity
                break;

            case 'Coffee':
                if (quantity >= 3)
                    discount = ((1/3) * 11.23) * quantity
                break;

            default:
                return 0
        }

        return parseFloat(discount.toFixed(2))
    }

});
