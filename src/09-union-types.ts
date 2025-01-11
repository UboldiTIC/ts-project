(()=>{
    let myDynamicVar: string | number;
    myDynamicVar = 10;
    myDynamicVar = 'hola';

    function greeting(myText: string | number){
        if(typeof myText === 'string'){
            console.log(`string ${myText.toUpperCase()}`);   
        } else { // Como el if es string, el else va a ser number por defecto.
            console.log(`number ${myText.toFixed(2)}`);
            
        }
    }
    greeting('hola');
    greeting(10.12235454);
})();