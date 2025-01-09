(() => {
    let isEnable = true;
    //isEnable = 'as';
    //isEnable = 1212;
    //isEnable = undefined;
    isEnable = false;

    let isNew: boolean = false;
    console.log('isNew', isNew);
    isNew = true;
    console.log('isNew', isNew);

    const random = Math.random();
    console.log('random', random);
    //isNew = random >= 0.5 ? 'true' : 'false';
    isNew = random >= 0.5 ? true : false;
    console.log('isNew', isNew);

    //const myBoolean: Boolean = true; // Boolean es un objeto, siempre usar boolean con minúscula por buena práctica. 

})();