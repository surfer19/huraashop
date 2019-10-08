import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    title: DS.attr('string'),
    price: DS.attr('number'),
    applyDiscount: DS.attr('number'),
    quantityFree: DS.attr('number'),
    quantity: DS.attr('number')
});
