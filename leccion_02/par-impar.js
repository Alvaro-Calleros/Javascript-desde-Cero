function esPar(num) {
    if (num % 2 == 0)
    {
        return true
    } else {
        return false
    }
}
const numero = Math.floor(Math.random() * 100) + 1;
console.log(`${numero} es ${esPar(numero) ? "par" : "impar"}`);
