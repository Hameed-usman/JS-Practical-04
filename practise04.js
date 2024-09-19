// console.log  ("ELoooo!!");

// PRACTICAL ASSIGNMENT 04 

let numbers = [32, 5, 77, 12, 98, 34, 3];

let highest = numbers[0];
let lowest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > highest) {
        highest = numbers[i];
    }
    if (numbers[i] < lowest) {
        lowest = numbers[i];
    }
}

console.log("Highest number is: " + highest);
console.log("Lowest number is: " + lowest);
