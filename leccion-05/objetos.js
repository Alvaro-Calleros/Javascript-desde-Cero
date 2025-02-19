
class Person{
    constructor(name, age, height, weight, maxBenchKg){
        this.name = name;
        this.age = age;
        this.height = height
        this.weight = weight;
        this.maxBenchKg = maxBenchKg;
    }

    flexear(){
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Height: ${this.height}m`);
        console.log(`Wright: ${this.weight}kg's`);
        console.log(`Max Bech press; ${this.maxBenchKg}kg's\n`);
    }

}

const personAlvaroSigma = new Person('Alvaro Calleros', '18', '1.76', '69', '92.5');
personAlvaroSigma.flexear();

const personSantiJuachinSigma = new Person('SantiJuachin', '18', '1.80', '81', '115');
personSantiJuachinSigma.flexear();