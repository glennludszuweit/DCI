//GLOBAL letIABLES
let starCount = 7;

//EXERCISE 1
for (let i = '*'; i.length <= starCount; i += '*') {
  console.log(i);
}
console.log('------------------------');

//EXERCISE 2
for (let i = 0; i < starCount; i++) {
  let star = '*';
  let space = ' ';

  for (let j = 1; j <= i; j++) {
    star += '*';
  }

  let spaceLeft = space.repeat(starCount - i - 1);
  star = spaceLeft + star;
  console.log(star);
}
console.log('------------------------');

//EXERCISE 3
for (let i = 0; i < starCount; i++) {
  let star = '*';
  let space = ' ';

  for (let j = 1; j <= i; j++) {
    star += '**';
  }

  let spaceLeft = space.repeat(starCount - i - 1);
  star = spaceLeft + star;
  console.log(star);
}
console.log('------------------------');

//EXERCISE 4
for (let i = 0; i < starCount; i++) {
  let star = '*';
  let space = ' ';

  for (let j = 1; j <= i; j++) {
    star += '**';
  }

  let spaceLeft = space.repeat(starCount - i - 1);
  star = spaceLeft + star;
  console.log(star);
}
for (let i = 0; i < 2; i++) {
  let totalStar = 1;
  let totalSpace = starCount - 2;
  let star = '***';
  let space = ' ';
  console.log(space.repeat(totalSpace) + star.repeat(totalStar));
}
console.log('------------------------');
