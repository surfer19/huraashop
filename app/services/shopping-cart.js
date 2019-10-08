import Service from '@ember/service';
import { A } from '@ember/array';


export default Service.extend({
    items: null,
    totalPrice: 0,
    totalPriceAfterDiscount: 0,
    totalDiscount: 0,
    totalItems: 0,
    totalDiscountedProducts: null,

    init() {
      this._super(...arguments);
      this.set('items', A([]));
      this.set('totalDiscountedProducts', []);
    },

    add(item) {
        this.get('items').pushObject(item)
    },

    setTotalDiscount(item) {
        this.totalDiscountedProducts[item.title] = item.discount
        this.set('totalDiscount', Object.values(this.totalDiscountedProducts).reduce((a, b) => a+b, 0))
    },

    getTotalDiscount() {
        return this.get('totalDiscount')
    },

    getTotalPrice() {
        const total = this.get('totalPrice');
        return parseFloat(total.toFixed(2));
    },

    setTotalPrice(newPrice) {
        const currentPrice = this.getTotalPrice()
        this.set('totalPrice', currentPrice + newPrice)
    },

    getTotalPriceAfterDiscount() {
        return this.get('totalPriceAfterDiscount')
    },

    setTotalPriceAfterDiscount() {
        const totalPrice = this.getTotalPrice();
        const totalDiscount = this.getTotalDiscount();
        const total = totalPrice - totalDiscount
        this.set('totalPriceAfterDiscount', parseFloat(total.toFixed(2)) )
    },

    getTotalItems() {
        return this.get('totalItems');
    },

    setTotalItems(number) {
        return this.set('totalItems', number);
    },

    getItems() {
        return this.get('items');
    }
});
