(()=>{
    let productTitle = 'My amazing product'; // solo puedo asignar un string.
    //productTitle = 100;
    //productTitle = true;
    //productTitle = () => {};
    //productTitle = ['Hello', 'World'];
    //productTitle = null;
    productTitle = 'New product';
    console.log('productTitle', productTitle);

    let productDescription = "My amazing product's description"; // puedo usar comillas dobles o simples. Evita error apostrofe en inglés.
    productDescription = 'New product description';

    let productPrice = 100;
    let productStock = true;

    const summary = `
        title: ${productTitle}
        description: ${productDescription}
        price: ${productPrice}
        stock: ${productStock}
    `;
    console.log('summary', summary);

    const myString: String = 'Hello'; // String es un objeto, siempre usar string con minúscula por buena práctica.
})();