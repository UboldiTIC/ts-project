(()=>{
    let myDynamicVar: any;
    myDynamicVar = 10;
    myDynamicVar = 'hola';
    myDynamicVar = true;
    myDynamicVar = {};
    myDynamicVar = [];  
    myDynamicVar = () => {};
    // cualquier cosa puede ir en una variable any sin generar error, es como trabajar nuevamente con JS.

    // Hacer que un Any sea tratado como un tipo de dato específico:
    myDynamicVar = 'Hola';
    const rta = (myDynamicVar as string).toLowerCase();  // Se puede hacer casting de tipos de datos.
    console.log(rta);

    // Otra forma de hacer casting:
    myDynamicVar = 1234;
    const rta2 = (<number>myDynamicVar).toFixed();
    console.log(rta2);
})();