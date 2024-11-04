//We have four numbers that need to add up to 50. At least two of these numbers must be odd. No number can be larger than 25, and each number must be unique.
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 14;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isOver25 && isUnique;

// Finally, log the results.
//console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


const numbers = [n1,n2,n3,n4];
let part1_question1 = divideByFive(numbers);
let part1_question2 = aGreaterThanb(numbers[0], numbers[numbers.length - 1]);
let part1_question3 = ((-n1 + n2) * n3) % n4;
console.log(part1_question1);
console.log(part1_question2);
console.log(part1_question3); // I don't know how I got 20

function divideByFive(args){    
    let answer =false;
    let temp = [];
    for (let index = 0; index < args.length; index++) {
        temp.push(args[index] % 5 == 0 ? true : false); //wrong what if the last value is true then the answer is true
    }
    answer = temp.includes(false) ? false: true;
    return answer;
}

function aGreaterThanb(a,b){
    if (a > b){return true;}
    else return false;
}



//part 2 questions

part2_question1 = fuelForTrip(30,28,23,1500);
console.log(`It will take on average ${part2_question1} to complete the trip`);
function fuelForTrip(speed1, speed2, speed3, total)
{
    let average = 0;
    let fuel1 = total / speed1;
    let fuel2 = total / speed2;
    let fuel3 = total / speed3;

    average = (fuel1 + fuel2 + fuel3) / 3;
    return average;
}

process.exit(0);