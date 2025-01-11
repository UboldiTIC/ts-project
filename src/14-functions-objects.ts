(()=>{

    /* 
    CON PARÁMETROS:
    const login = (email: string, password: string) => {
        console.log(email, password);
    }
    
    login('pepito@pepe.com', '123123'); 
    */

    // CON OBJETOS:
    const login = (data: {email: string, password: number}) => {
        console.log(data.email, data.password);

    }
    
    login({
        email: 'pepito@pepe.com', 
        password: 123123
    });

    // OTRO EJEMPLO MÁS COMPLEJO

    type Sizes = 'S' | 'M' | 'L' | 'XL';

    const addProduct = (data: {
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    }) => {

    }

})();