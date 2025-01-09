/* let myProductName = 'Product 1'; */  // Error porque no se puede volver a usar una variable que ya fue declarada en otro archivo.

// Para evitar este error podemos crear una función anonima autoejecutada que nos permita encapsular el código y evitar que se mezclen las variables de un archivo a otro.

/* 
Estructura de función anónima autoejecutada:

(() => { 

}); 

*/

(function () {
    let myNameIs: string = 'Jhon';
    let myProductName = 'Product 1'; 
    let myProductPrice = 100;
    
    const myProductStock = 20; 
    
})();