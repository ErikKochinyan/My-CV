//Task 1

isOdd = (n) => n % 2 === 1;
isEven = (n) => n % 2 === 0;
function separateOddAndEven(arr){
  let arrOfEvens = [];
  let arrOfOdds = [];
  for(let i = 0; i < arr.length; i++){
    if(isEven(arr[i])){
      arrOfEvens.push(arr[i]);
    }
    if(isOdd(arr[i])){
      arrOfOdds.push(arr[i]);
    }
  }
   return [arrOfOdds, arrOfEvens];
}
console.log(separateOddAndEven([1,3,5,9]));

// Task 2

function filterRange(arr, a, b){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if( arr[i] > a && arr[i] < b){
      newArr.push(arr[i])
    }
  } 
    return newArr;
}
console.log(filterRange([-10, -8, 0, 10, 20], -100, 15));

//Task 3

const frameworks = [
{ id: 1, title: "react" },
{ id: 2, title: "angular" },
{ id: 3, title: "vue" }
];
function findFramework(arr, ell){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i].id === ell) {
     newArr.push(arr[i])
    } 
  }  return newArr.length !== 0 ? newArr : 'no data'
}
console.log(findFramework(frameworks,31));

// Task 4

function generatObj(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    let obj = {};
    obj.title = arr[i];
    obj.index = i;
    newArr.push(obj)
  } return newArr
}
  console.log(generatObj(['Godfather', 'Game of thrones',
'Social Network']))




//Task 5

const arr1 = ['Godfather', 'Game of thrones',
'Social Network'];
function remove(arr, letter){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if (arr[i][0] !== letter){
      newArr.push(arr[i])
    }
  } 
  return newArr;
}
console.log(remove(arr1, 'G'));