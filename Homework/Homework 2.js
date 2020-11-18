//Task 1
/*
function largerThen(arr, num){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > num){
      newArr.push(arr[i]);
     }
   }  return newArr.length !== 0 ? newArr :'Such values do not exist';
  } 
console.log(largerThen([10, 25, 16, -5, 30, 15, 24] , 16))
*/
//Task 2
const isOdd = (n) => n % 2 === 1;

function isEveryDigitEven(n) {
  if (isOdd(n)) return false;

  while(n) {
    let digit = n % 10;
    n = Math.floor(n / 10);

    if (digit % 2 === 1) {
      return false;
    }
  }
  return true;
}

function EvenDigNums(num1, num2){
  let result = '';
  for(let i = num1;i <= num2; i++){
    if (isEveryDigitEven(i)) {
     result += i + ' '; 
    }
  } return result || "Such numbers does not exist."
}
  console.log(EvenDigNums(99,199))

//Task3

function findWrongSort(array){
  for(let i = 1; i < array.length; i++){
    if(array[i - 1] > array[i]){
      return i;
     } 
   } return (-1);
}

console.log (findWrongSort([-9,-4,-4,3,12,4,5]))


//Task 4

function largestProd(arr){
let num = 0;
  for(let i = 0; i < arr.length; i++){
      if(arr[i] * arr[i + 1] > num){
        num = arr[i] * arr[i + 1];
      } if(arr[i] * arr[i + 1] < 0 && arr[i] * arr[i + 1] < num){
        num = arr[i] * arr[i + 1];
      }
      }return num;
    }  
 console.log(largestProd([-14,78,-36,10,-25]));

// Task 5

let arr = [1,2,3,6,7,9];
let newArr = [];
 for(let i = 1; i < arr.length; i++){
      if(arr[i] - arr[i-1] !== 1){
          let num = arr[i] - arr[i-1];
           let j = 1;
           while (j < num){
              newArr.push(arr[i-1] + j);
              j++;      
          } 
       } 
   } 
    console.log(newArr);

//Task 6
                      //?????????

let array = [[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]];
  let sum = 0;
  for(let i = 0; i < array.length; i++){
   for(let j = 0; j < array[i].length; j++){
    sum +=array[j][0];
    
   }
  } 

 console.log(sum)
//Task 7

function multiplOddNum(arr){
  let newA = [];
  let newA1 = [];
  for(let i = 0; i< arr.length; i++){
    if(arr[i] % 2 !== 0){
      newA.push(arr[i]);
    }
  }
    for(let j = 0;j < newA.length ; j++){
      newA1.push(newA[j] * newA.length );
    } return newA1;
}
console.log(multiplOddNum([5, 4, 78, 0, -3, 7]));
 