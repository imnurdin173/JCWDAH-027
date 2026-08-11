const targetNumber: number = 25;

const isEven: boolean = targetNumber % 2 === 0;
const numberTypeResult: string = isEven ? "even number" : "odd number";

console.log(`[1] ${targetNumber} -> ${numberTypeResult}`);

let isPrime: boolean = targetNumber > 1;

for (let i: number = 2; i * i <= targetNumber; i++) {
    if (targetNumber % i === 0)
        isPrime = false;
}

const primeResult: string = isPrime
    ? `${targetNumber} is prime number`
    : `${targetNumber} is not a prime number`;

console.log(`[2] ${primeResult}`);