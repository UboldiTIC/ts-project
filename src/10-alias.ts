(()=>{
    type UserId = string | number | boolean; // Con la palabra reservada type creamos nuestro propio tipo de dato mediante un alias.
    let userId: UserId; 
    
    // Literal types
    type Sizes = 'S' | 'M' | 'L' | 'XL'; // Literal types permiten definir un tipo de dato que solo puede tener un valor específico.
    let shirtSize: Sizes;
    shirtSize = 'S';
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'XL';
    //shirtSize = 'cualquier cosa que sea string'; // Esto no debería ser permitido.

    function greeting(userId: UserId, size: Sizes){
        if(typeof userId === 'string'){
            console.log(`string ${userId.toUpperCase()}`);   
        }
    }
    greeting('hola', 'S');
    greeting(1234, "XL");
})();



