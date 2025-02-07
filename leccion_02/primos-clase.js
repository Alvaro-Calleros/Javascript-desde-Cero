function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const numero = Math.floor(Math.random() * 100) + 1;

console.log(`${numero} es ${esPrimo(numero) ? "primo" : "compuesto"}`);
