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

let person: { name: string; age: number };
person = { name: "Sanyam", age: 25 };
// person = { isEmployee: true };

let people: { name: string; age: number }[];
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
