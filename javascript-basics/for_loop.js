let weather = {
  montag: { morning: '', evening: '' },
  dienstag: { morning: '', evening: '' },
  mittwoch: { morning: '', evening: '' },
  donnerstag: { morning: '', evening: '' },
  freitag: { morning: '', evening: '' },
  samstag: { morning: '', evening: '' },
  sonntag: { morning: '', evening: '' },
};
let weatherTmp = 17;
let difference = 3;
for (var day in weather) {
  weatherTmp = weatherTmp - difference;
  weather[day].morning = weatherTmp;
  weather[day].evening = weatherTmp - difference;
}
console.log(weather);

let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (var i = 1; i <= 5; i += 2) {
  console.log(i);
}
console.log('Next iteration is: ' + i);

for (let myNewCounter = 3; myNewCounter <= 5; myNewCounter++) {
  console.log('For v2: ' + myNewCounter);
}
