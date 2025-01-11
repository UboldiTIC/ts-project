(()=> {
    type Sizes = 'S' | 'M' | 'L' | 'XL';

    function createProductToJson(
        title: string,
        createdAt: Date,
        stock: number,
        size: Sizes
    ) {
        return {
            title,
            createdAt,
            stock,
            size
        };
    }

    const product1 = createProductToJson('Shirt', new Date(), 100, 'M');
    console.log(product1);
    console.log(product1.size);

// Arrow function con size opcional

/*
Estructura de arrow function:

(parametros) => {
    return
}   
    
*/  

    const createProductToJsonV2 = (
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes // El signo de interrogación indica que el parámetro es opcional.
    ) => {
        return {
            title,
            createdAt,
            stock,
            size
        };
    }

    const product2 = createProductToJsonV2('Shirt', new Date(), 100);
    console.log(product2);
    console.log(product2.size);

})();