"use strict";
// TYPES
// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters
// Primitives
let age;
age = 12;
let username;
username = "Sam";
let isInstructor;
isInstructor = true;
// More complex types
let hobbies;
hobbies = ["Music", "Gaming"];
let person;
person = { name: "Sanyam", age: 25 };
// person = { isEmployee: true };
let people;
people = [
    { name: "Sanyam", age: 25 },
    { name: "Naveen", age: 24 },
];
// Type inference
let course = "React the complete guide";
// course = 1234;
// Union Types
let courseV2 = "React the complete guide";
courseV2 = 1234;
// Function and Types
function add(a, b) {
    return a + b;
}
function printOutput(value) {
    console.log(value);
}
// Generics
function insertAtBeginning(array, value) {
    const newArray = [value, ...array];
    return newArray;
}
const demoArray = [1, 2, 3];
const updateArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
// updateArray[0].split(""); // get runtime error if not using generic type
const stringArr = insertAtBeginning(["b", "c", "d"], "a");
stringArr[0].split("");
// Classes
class Student {
    //   firstName: string;
    //   lastName: string;
    //   age: number;
    //   private courses: string[];
    constructor(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
        // this.firstName = first;
        // this.lastName = last;
        // this.age = age;
        // this.courses = courses;
    }
    enrol(courseName) {
        this.courses.push(courseName);
    }
    listCourses() {
        return this.courses.slice();
    }
}
const student = new Student("Sanyam", "Trehan", 25, ["Maths", "CSE"]);
student.enrol("Angular");
// student.courses => Maths, CSE, Angular
// student.courses // Throw error as courses is now private
student.listCourses();
let sam;
sam = {
    firstName: "Sanyam",
    age: 25,
    greet() {
        console.log("Hello");
    },
};
class Instructor {
    greet() {
        console.log("Hello");
    }
}
