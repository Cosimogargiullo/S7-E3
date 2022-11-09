//<---GET ALL---->//
axios.get('https://fakestoreapi.com/products/').then(function (response) {
    console.log(response);
    console.table(response.data);
}).catch(function(error) {
    console.log(error);
});

//<---GET ONE---->//
axios.get('https://fakestoreapi.com/products/17').then(function (response) {
    console.log(response);
    console.table(response.data);
}).catch(function(error) {
    console.log(error);
});

//<---POST---->//
axios.post('https://fakestoreapi.com/products/', {title: 'My Post Query', price: 10.99, description: 'My Post Query', category: 'My Post Query', image: 'My Post Query', rating: 'My Post Query'}).then(function (response) {
    console.log(response.data);
}).catch(function(error) {
    console.log(error);
});

//<---PUT---->//
axios.put('https://fakestoreapi.com/products/21', {title: 'My Post Query', price: 10.99, description: 'My Put Query', category: 'My Put Query', image: 'My Put Query', rating: 'My Put Query'}).then(function (response) {
    console.log(response.data);
}).catch(function(error) {
    console.log(error);
});

//<---DELETE---->//
axios.delete('https://fakestoreapi.com/products/21').then(function (response) {
    console.log(response.data);
}).catch(function(error) {
    console.log(error);
});

//<---GET ALL---->//
axios.get('https://fakestoreapi.com/products/').then(function (response) {
    console.log(response);
    console.table(response.data);
}).catch(function(error) {
    console.log(error);
});