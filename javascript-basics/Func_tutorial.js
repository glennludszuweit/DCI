// convert to function and params variables
let address = 'Dusseldorf';
let state = 'NRW';
let name = 'Samuel';
console.log(name + ' ' + address + ' ' + state);

//FUTURE TELLER
// Create a funtion futureTeller()
//    futureTeller() takes 4 parameters (job, location, partnerName, numKids)
//    console.log "You will be a (job) in (location) and marry (partnerName) with  (numKids) kids."
// Print out in console.
let yourJob = prompt('What do you want to be?');
let yourLocation = prompt('Where do you want to be?');
let yourPartner = prompt('Who do you want to marry?');
let yourKids = prompt('How many kids you plan to have?');

function futureTeller(job, location, partnerName, numKids) {
  alert('You will be a ' +job+ ' in ' +location+ ' and marry ' +partnerName+ ' with '  +numKids+ ' kids.');
}
futureTeller(yourJob, yourLocation, yourPartner, yourKids);

//DOG AGE CALCULATOR
// Create a function() named dogAgeCalc
//    this function takes 2 parameters dogName and dogAge
//    create a variable that will calculate dogAge and humanAge being 1 dogAge multipleid by 7 humanAge
//    output result in console with this sentence "Your dog is (variable) years old in dogs year!"
// Call dogCalcAge 3 times with different values

function dogAgeCalc(dogName, dogAge) {
  let actualDogAge = dogAge * 7;
  let dogInfo = 'Your dog ' + dogName + ' is ' + actualDogAge + ' years old in dogs year!'
  console.log(dogInfo)
}
dogAgeCalc('Tony', 4);
dogAgeCalc('Missy', 2);
dogAgeCalc('Charlie', 12);

// Create function named hotdogsLifetimeSupply()
function hotdogsLifetimeSupply(hotdogsPerDay, age) {
  let maxAge = 100;
  let daysOfYear = 365;
  let totalHotdogsNeeded = hotdogsPerDay * daysOfYear;
  let remainingYears = maxAge - age;
  let totalHotdogForLife = totalHotdogsNeeded * remainingYears;
  let message = 'You will need atleast ' + totalHotdogForLife + ' hotdogs until you are ' + maxAge;
  console.log(message)
}
hotdogsLifetimeSupply(26, 1);