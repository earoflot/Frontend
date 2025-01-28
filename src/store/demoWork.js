// JavScript Objects...........
const student = {
  fullName: "Manish",
  age: 26,
  mark: 90,
  isPass: true,
};

console.log(student);
console.log(typeof student);
console.log(student.age);
console.log(student["mark"]);

let mark = student["mark"];
console.log(mark);

student["age"] = student["age"] + 1;
console.log(student);

student["fullName"] = "Raman";

console.log(student);



// Arithmetic Operators..........
// Addition Subtraction Multiphication Division Modulus Exponenttiation Increment Decrement........

let a = 5;
let b = 2;
const add = a + b;
const sub = a - b;
const mul = a * b;
const div = a / b;
const modulus = a % b;
const exponentiation = a ** b;

console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
console.log(modulus);
console.log(exponentiation);

//  Unary Operators...........
// Increment...........
let numIncrement = 1;
console.log(numIncrement);
numIncrement = numIncrement + 1;
console.log(numIncrement);
numIncrement++;
console.log(numIncrement);
// Post Increment...
let incrementPost = 10;
console.log(incrementPost++);
console.log(incrementPost);
// pre Increment..
let numPre = 10;
console.log(++numPre);

// Decrement............
let numDecrement = 3;
console.log(numDecrement);
numDecrement = numDecrement - 1;
console.log(numDecrement);
numDecrement--;
console.log(numDecrement);

// Post Decrement.....
let decrementPost = 5;
console.log(decrementPost--);
console.log(decrementPost);
// Pre Decrement..........
let decrementPre = 5;
console.log(--decrementPre);

// Assignment Operators......

let assigmentOpe = 5;
console.log(assigmentOpe);
assigmentOpe += 4;
console.log(assigmentOpe);
assigmentOpe -= 4;
console.log(assigmentOpe);
assigmentOpe *= 4;
console.log(assigmentOpe);
assigmentOpe /= 4;
console.log(assigmentOpe);
assigmentOpe %= 4;
console.log(assigmentOpe);
assigmentOpe **= 4;
console.log(assigmentOpe);


// Comparison Operators.......
let num_1 = 0;
let num_2 = 1;
let str_num = "0";
// Equal to ==
let equal_to = num_1 == num_2;
console.log(equal_to);
// Not Equal to !=
let not_equal = num_1 != num_2;
console.log(not_equal);
// Equal to type ===
let type_equal = num_1 === str_num;
console.log(type_equal);
// Not Equal to & type !==
let typeNot_equal = num_1 !== str_num;
console.log(typeNot_equal);
// Greater then >
let greater_then = num_1 > num_2;
console.log(greater_then);
// Greater then Equal to >=
let greaterThen_equal = num_1 >= num_2;
console.log(greaterThen_equal);
// Less then <
let less_then = num_1 < num_2;
console.log(less_then);
// Less then Equal to <=
let lessThen_equal = num_1 <= num_2;
console.log(lessThen_equal);

// Logical Operators..........AND && OR || NOT !
let logical_num1 = 6;
let logical_num2 = 5;
let condition_1 = logical_num1 > logical_num2;
let condition_2 = logical_num1 === logical_num2;
// AND && OPERATORS..........
console.log(condition_1 && condition_2);
// OR || OPERATORS
console.log(condition_1 || condition_2);
// NOT ! OPERATORS..........
console.log(!(condition_1 === condition_2));

// CONDITIONAL STATEMENT...........
let age = 26;
// To implement some condition in the code.....
// IF STATEMENT
if (age > 18) {
  console.log("You can vote");
}
// IF ELSE
age = 17;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can not vote");
}
// IF ELSE
age = 60;
if (age <= 18) {
  console.log("You are Junior");
} else if (age >= 60) {
  console.log("You are Senior");
} else {
  console.log("You can vote");
}

// Ternary Operators...
// condition ? true output : false output
age = 10;
let ternaryOpe = age > 18 ? "Adult" : "Not Adult";
console.log(ternaryOpe);


// LOOPS..........
// loop are used to execute a piece of code again and again
// For Loop........
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + 1;
  console.log(sum);
}
console.log(sum);

// For Of Loop
let str1 = "Manishquare";
for (let i of str1) {
  console.log(i);
}
let str2 = "Manish";
let size = 0;

for (let i of str2) {
  console.log(i);
  size++;
}
console.log(size);
// For in Loop

let student1 = {
  fullName: "Manish",
  age: 26,
  mark: 90,
  isPass: true,
};
// While Loop........
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
// Do While Loop
do {
  console.log("Manish");
  i++;
} while (i >= 10);

for (let key in student1) {
  console.log("key", key, "value", student1[key]);
}

// Strings
// String is a sequence of characters used to represent text

// Create String
let str001 = "Manish";
console.log(str001);
// Inbuilt properties.....
// String Length
let strLen = str001.length;
console.log(strLen);
// String Indices
// Indexing
let strIndex = str001[5];
console.log(strIndex);

// Template Literals in js
// A way to have embedded expressions in string
// String Interpolation
// To create strings by doing substitution of placeholders

let str002 = `Manishquare`;
console.log(str002);

let objects1 = {
  item: "pen",
  price: 10,
};
let objOutput = `The const of ${objects1.item} is ${objects1.price}`;
console.log(objOutput);


// String Methods in JS
// These are built-in-functions to manipulate a string

// toUpperCase ()
let str01 = "Manish";
let upperCase = str01.toUpperCase();
console.log(upperCase);
// toLowerCase()
let str02 = "MANISH";
let lowerCase = str02.toLowerCase();
console.log(lowerCase);
// trim() removes whitespaces
let str03 = "   maishquare";
console.log(str03);
let trimStr = str03.trim();
console.log(trimStr);