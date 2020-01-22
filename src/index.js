import "./styles.css";

// 1. 배열 복사
const arr = [1, 2, 3];
const arr2 = arr;
const arr3 = [...arr];

arr3[0] = 9;
console.log(arr);
console.log(arr2);
console.log(arr3);

// 2. 배열에 값 추가
const arr4 = [...arr, 4, 5];
const arr5 = [0, ...arr];

console.log(arr4);
console.log(arr5);

// 3. 배열에서 값 제외하고 복사 
//const arr6 = [,,...arr];
//console.log(arr6);