///////////1. Sum of Numbers///////////
let numbersArray = [5, 10, 15, 67];

let sumOfNumsArray = (numbersArray) => {
  let sumOfNumbers = numbersArray.reduce((numbers, value) => {
    return numbers + value;
  });
  return sumOfNumbers;
};
sumOfNumsArray(numbersArray);

let prodOfNumsArray = (numbersArray) => {
  let prodOfNumbers = numbersArray.reduce((numbers, value) => {
    return numbers * value;
  });
  return prodOfNumbers;
};
prodOfNumsArray(numbersArray);

///////////2. Hello Friends///////////
let friendsName = ['Tony', 'Alice', 'Mary', 'Bob'];

let sayHelloFriends = (friendsName) => {
  let helloFriends = friendsName.map((name) => {
    return `Hello ${name}!`;
  });
  return helloFriends;
};
sayHelloFriends(friendsName);

let findFriendsIndexes = (friendsName) => {
  let friendsIndexes = friendsName.map((friend) => {
    return `${friend} is at index ${friendsName.indexOf(
      friend
    )} of my friends array.`;
  });
  return friendsIndexes;
};
findFriendsIndexes(friendsName);

///////////3. City Names///////////
let covertCityNamesArrToStr = (citiesNames) => {
  let citiesNamesInString = citiesNames.map((cities) => {
    return cities;
  });
  return citiesNamesInString.join(', ');
};
covertCityNamesArrToStr(['London', 'Tokyo', 'Munich']);

///////////4. Odds and Even///////////
let addToOddSubToEven = (oddsOrEven) => {
  let addOrSub = oddsOrEven.map((number) => {
    return number % 2 === 0 ? number - 1 : number + 1;
  });
  return addOrSub;
};
addToOddSubToEven([21, 44, 5, 7, 12, 4, 8]);

///////////5. Capitalize///////////
let capitalizeFirstLetter = (wordArray) => {
  let newFirstLetter = wordArray.map((firstLetter) => {
    let capitalLetter = firstLetter[0].toUpperCase();
    return capitalLetter + firstLetter.toLowerCase().slice(1);
  });
  return newFirstLetter;
};
capitalizeFirstLetter(['jOnAs', 'SAMuel', 'gEORGe']);

///////////6. No Duplicates!///////////
let giveMeASet = (items) => {
  //let removeDuplicates = items.reduce((value, item) => {
  //  return value.includes(item) ? value : [...value, item]
  //}, []);
  //return removeDuplicates;
  return [...new Set(items)]
};
giveMeASet([1, 4, 4, 7, 7, 7]);

///////////7. Repeat it///////////
let repeatMe = (item, times) => {
    let repeated = Array.apply(null,Array(times)).map(() => {
      return item;
    });
    return repeated;
}
repeatMe('I like JS!', 3)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    