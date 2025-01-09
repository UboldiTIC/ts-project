(() => {
    let myProductPrice = 100;
    myProductPrice = 12;
    console.log ('myProductPrice', myProductPrice);

    let customerAge: number = 25;
    customerAge = customerAge + 1;
    console.log ('customerAge', customerAge);

    let productInStock: number;
    //productInStock = 10;
    productInStock = 10; // Asignar un valor para solucionar el error. 
    console.log ('productInStock', productInStock);
    if (productInStock > 10) {
        console.log ('Product is in stock');
    }

    let discount = parseInt('asd'); // NaN
    console.log ('discount', discount);
    if (discount <= 200) {
        console.log ('Apply discount');
    } else {
        console.log ('Not apply discount');
    }

    let hex = 0xf00d;
    console.log ('hex', hex);
    let bin = 0b1010; // imprime el valor en decimal = 10
    console.log ('bin', bin);

    const muNumber: Number = 1000; // Number es un objeto, siempre usar number con minúscula.

})();