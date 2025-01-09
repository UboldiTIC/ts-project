(()=>{
    let prices = [100, 75, 300];
    prices.push(200);
    //prices.push(true);
    //prices.push('hola');
    //prices.push({});
    prices = [200, 300, 400];
})();

(()=>{
    let prices = [100, 75, 300, 'hola', true];
    prices.push(200);
    prices.push(true);
    prices.push('hola');
    //prices.push({});
    prices = [200, 300, 400];

    let mixed: (string | number | boolean)[] = [100, 75, 300, 'hola', true];
    mixed.push(200);
    mixed.push(true);
    mixed.push('hola');
    //mixed.push({});

    let mixedWithObject: (string | number | boolean | Object)[] = [100, 75, 300, 'hola', true];
    mixedWithObject.push(200);
    mixedWithObject.push(true);
    mixedWithObject.push('hola');
    mixedWithObject.push({}); // Tabien permite insertar objetos y arrays.
    mixedWithObject.push([]);

    let numbers = [1, 2, 3, 4, 5];
    numbers.map(item => item * 2);

})();