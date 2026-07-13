console.log("Hello World");
const x = 100;
let y;
let z = null;
let a = true;
// let a = 3; // SyntaxError
a = 3;

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(typeof a);

console.log("v1 : ", v1);
console.log("v2 : ", v2);

var v1 = 2;
var v2 = 2;

console.log(v1);
console.log(v2);

console.log(++v1);
console.log(v2++);

console.log(v1);
console.log(v2);

// function prefix_plus(x) {
//   x = x + 1;
//   return x;
// }

// function suffix_plus(x) {
//   y = x;
//   x = x + 1;
//   return y;
// }

if (1 == "1") {
  console.log("Equal");
} else {
  console.log("Not Equal");
}

if (1 === "1") {
  console.log("Equal");
} else {
  console.log("Not Equal");
}

console.log(typeof 1);
console.log(typeof 1.0);
console.log(1 == 1.0);
console.log(1 === 1.0);

// 1.123456789 ^ x (-1) = 0.1123456789
// 1.123456789 ^ x (2) = 112.3456789

// SyntaxError
// console.log("Hello
//     World!");

d = `Hello
world!`;
console.log(d);

// 문자열 연결
a = "Hello";
b = " World!";
console.log(a + b);
// 벡틱 내에서 ${}안에 표현식 삽입
console.log(`${a}${b}`);
console.log(`1+1=${1 + 1}`);

// ==, != 연산자는 타입을 변환 후 비교
console.log("== 비교 >>>>>>>>>");
console.log(1 == "1"); // "1"을 숫자로 변환 후 비교
console.log(1 == "1.0"); // "1.0"을 숫자로 변환 후 비교
console.log(1 == true); // true를 숫자로 변환 후 비교
console.log("1" == true); // 1과 true를 숫자로 변환 후 비교
console.log(null == undefined); // null과 undefined는 동등하게 취급
console.log([1] == "1"); //[1]을 문자열로 변환 후 비교

console.log("=== 비교 >>>>>>>>>");
console.log(1 === "1"); // "1"을 숫자로 변환 후 비교
console.log(1 === "1.0"); // "1.0"을 숫자로 변환 후 비교
console.log(1 === true); // true를 숫자로 변환 후 비교
console.log("1" === true); // 1과 true를 숫자로 변환 후 비교
console.log(null === undefined); // null과 undefined는 동등하게 취급
console.log([1] === "1"); //[1]을 문자열로 변환 후 비교

let radius = 5;
const pi = 3.14;
let area;
area = pi * radius ** 2;
console.log(`반지름이 ${radius}인 원의 너비 : ${area}`);

// 형 변환
let c;
c = String(1);
console.log(c, typeof c);

c = Number("1.5");
console.log(c, typeof c);

c = Boolean(1);
console.log(c, typeof c);

// false로 변환되는 값
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log("파이썬과 다름 ===");
console.log(Boolean([]));
console.log("===============");

// +연산자를 문자열과 함께 사용할 때 →문자열 타입으로 변환
console.log("10" + 5); //105
console.log("10" + undefined); //10undefined
console.log("10" + null); //10null
console.log("10" + true); //10true
//+ 이외의 산술연산자를 문자열과 함께 사용할 때 →숫자 타입으로 변환
console.log("10" * 5); // 50
console.log("10" * undefined); // undefined는 NaN으로 변환
// NaN(Not a Number. 숫자로 변환할 수 없는 값을 처리할 때 발생하는 특별한 값)
console.log("10" * null); // 0(null은 0으로 변환)
console.log("10" * true); //10(true는 1로 변환)
console.log("===============");

// 1부터 5까지 출력하기
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 5부터 1까지 출력하기
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

console.log("===============");
// function add(x, y) {
//   return x + y;
// }

// console.log(add(1, 2)); //3
console.log("===============");
// console.log(add(1, 2)); //3

// function add(x, y) {
//   return x + y;
// }
console.log("===============");
// console.log(add); // undefined
// console.log(add(1, 2)); // TypeError

// var add = function (x, y) {
//   return x + y;
// };
console.log("===============");
// 함수 내부에서 변수 예약어를 빼고 변수를 선언하면 전역변수가 된다.
function addNumber(n1, n2) {
  sum = n1 + n2;
}
addNumber(1, 2);
console.log(sum); //3
