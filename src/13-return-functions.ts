(()=>{
    const calcTotal = (prices: number[]): string => {
        let total = 0;
        prices.forEach((price) => {
            total += price;
        });
        return total.toString();
    }

    // Función sin retorno: sirve para llamar a otra función por ejemplo.
    const printTotal = (prices: number[]): void => {  // void significa que no va a retornar nada.
        const rta = calcTotal(prices);
        console.log(`El total es ${rta}`);
    }
    
    printTotal([10, 20, 30, 40, 50]);

})();