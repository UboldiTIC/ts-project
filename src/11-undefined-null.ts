(()=>{
    //let myNumber: number = undefined; 
    //let myString: string = null;

    let myUndefined = undefined; // El tipo de dato va a ser inferido como any.
    let myNull = null; // El tipo de dato va a ser inferido como any.

    let myNumber: number | null = null;
    myNumber = 10;

    let myString: string | undefined = undefined;
    myString = 'hola';

    function hi(name: string | null){
        let hello = 'Hola ';
        if(name) {
            hello += name;
        } else {
            hello += 'nobody';
        }
        console.log(hello);
    }
    hi('Juan');
    hi(null);

    function hiV2(name: string | null){
        let hello = 'Hola ';
        hello += name?.toLowerCase() || 'nobody'; // El operador ? permite acceder a las propiedades de un objeto que puede ser null o undefined.
        console.log(hello);
    }
    hiV2('Juan');
    hiV2(null);

})();