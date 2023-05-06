// TYPES
// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12;

let username: string;
username = "Sam";

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[];
hobbies = ["Music", "Gaming"];

type Person = { name: string; age: number };

let person: Person;
person = { name: "Sanyam", age: 25 };
// person = { isEmployee: true };

let people: Person[];
people = [
  { name: "Sanyam", age: 25 },
  { name: "Naveen", age: 24 },
];

// Type inference

let course = "React the complete guide";
// course = 1234;

// Union Types

let courseV2: string | number = "React the complete guide";
courseV2 = 1234;

// Function and Types

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updateArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

// updateArray[0].split(""); // get runtime error if not using generic type

const stringArr = insertAtBeginning(["b", "c", "d"], "a");
stringArr[0].split("");
