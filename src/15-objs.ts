(() => {

    type Sizes = 'S' | 'M' | 'L' | 'XL';
    type Products = {
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes // Parámetro opcional.
    };

    const products: Products[] = [];

    const addProduct = (data: Products) => {
        products.push(data);
    }

    addProduct({
        title: 'Pro1',
        createdAt: new Date(1993, 1 , 1),
        stock: 12,
        size: 'XL'
    });
    console.log(products);

    products.push({
        title: 'Prod3',
        createdAt: new Date(2010, 2, 3),
        stock: 25,
        // puedes agregar el optional.
    })
})();