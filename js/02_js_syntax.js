const message = "Hello, World!";

// 프로퍼티 length를 통해 문자열의 길이를 알 수 있다.
console.log(message.length); // 13

// 인덱스로 각문자에 접근할 수 있다.
console.log(message[0]); //H
console.log(message[-1]); // undefined
console.log(message[100]); // undefined

// 특정문자의 인덱스
console.log(message.indexOf("llo")); //2
console.log(message.indexOf("a")); // -1

// 특정문자 포함 여부
console.log(message.includes("Hello")); //true
console.log(message.includes("a")); // false

// 대문자, 소문자변환
console.log(message.toUpperCase()); // HELLO, WORLD!
console.log(message.toLowerCase()); // hello, world!
// 문자 치환 하기
console.log(message.replace("World!", "Python!")); // Hello, Python!
// 문자 분리 하기
console.log(message.split(",")); //[ 'Hello', ' World!' ]

// 특정문자로 시작하거나 끝나는지 확인
console.log(message.startsWith("He")); //true
console.log(message.endsWith("!")); //true

// 앞, 뒤 공백 없애기
const message2 = " hello ";
console.log(message2);
console.log(message2.trim());

// 문자 반복하기
const message3 = "ha";
console.log(message3.repeat(3));
