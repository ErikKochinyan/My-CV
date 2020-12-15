//Task 1

function isIsogram (str) {
  for(let i = 0; i < str.length; i++) {
    for(let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}
console.log(isIsogram('area'))

//Task 2

function areAllDigsOdd(num){
  if((num  % 10) % 2 === 0) return false
  if(num % 10 === num) return true
  
   return areAllDigsOdd(Math.floor(num / 10))
  
}
console.log(areAllDigsOdd(77595555))

//Task 3

let arr =  [1, [3, 4, [1, 2]], 10] 

function flatten (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let arr1 = flatten(arr[i]);
      arr1.forEach(function(value){ newArr.push(value) })
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(flatten(arr))

//Task 4

// Given a number. Write a function that calculates its sum of the digits and if that sum has
// more than 1 digit find the sum of digits of that number. Repeat that process if needed
// and return the result.
let num = 29

function sumOfDig(num){
  let newNum = num + ''
  let sum = 0;
  while(newNum.length > 0){
    for(let i = 0;i < newNum.length; i++)
    sum += +newNum[i];
  if(sum < 10) return sum;
  else return newNum[0];
  } 
}

console.log(sumOfDig(num))
