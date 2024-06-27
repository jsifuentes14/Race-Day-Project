//Project Race Day 
let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 28

if (early && age > 18) {
    raceNumber += 1000;
}

if (early && age > 18) {
    console.log(`You are racing at 9:30, your race number is ${raceNumber}`);
} 
else if (!early && age > 18) {
    console.log(`You are racing at 11:00, and your race number is ${raceNumber}`);
}

if (age < 18) {
    console.log(`You will be racing at 12:30, and your race number is ${raceNumber}`);
}



