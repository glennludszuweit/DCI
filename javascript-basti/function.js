let counter = 0;
let numVal = 3;

function addOne(theParams, secondParams) {
  return (theParams + 1) + (secondParams + 2);
}
addOne(counter, numVal);

///*****************************************.reduce*********

let classGrades = [2, 1, 3, 4, 4, 6, 1, 3, 5];
let totalGrade = classGrades.reduce(addGrades, 0);
 
function addGrades(gradeTotal, value) {
  return gradeTotal + value
}

console.log(totalGrade / classGrades.length)

//function addGrades(aveGrade) {
//  let students = classGrades.length;
//  let totalGrade = 0;
  // for ( let i = 0; i < students; i++ ) {
  //  totalGrade += classGrade[i];
  // }
//  return aveGrade;
//}
//addGrades(classGrades)

///*****************************************.forEach*********

let classNames = ['Daniel', 'Danylo', 'Glenn', 'Basti'];

classNames.forEach((name) => {
  console.log(`Hi ${name}`);
})

///*****************************************.map*********



















