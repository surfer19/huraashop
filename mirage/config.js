export default function() {
  this.namespace = '/api';
  let products = [
    {
      type: 'product',
      id: '1',
      attributes: {
        title: "Coffee",
        price: 11.23,
        discounted: true
      }
    },
    {
      type: 'product',
      id: '2',
      attributes: {
        title: "Green tea",
        price: 3.11,
        discounted: true
      }
    },
    {
      type: 'product',
      id: '3',
      attributes: {
        title: "Strawberries",
        price: 5,
        discounted: true
      }
    },
    {
      type: 'product',
      id: '4',
      attributes: {
        title: "Chocolate",
        price: 5.23,
        discounted: false
      }
    },
    {
      type: 'product',
      id: '5',
      attributes: {
        title: "Juice",
        price: 2.11,
        discounted: false
      }
    },
    {
      type: 'product',
      id: '6',
      attributes: {
        title: "Halusky",
        price: 10,
        discounted: false
      }
    }
  ];
  this.get('/products', function() {
    return {
      data: products
    }
  })
  this.get('/baskets', function() {
    return {
      data: []
    }
  })
}
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
