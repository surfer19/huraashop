import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    title: DS.attr(),
    price: DS.attr()
});
