"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var director1 = {
    firstName: "John",
    lastName: "Doe",
    location: "New York",
    fullTimeEmployee: false,
    numberOfReports: 17
};
console.log(director1);
var printTeacher = function (firstName, lastName) { return "".concat(firstName[0], ". ").concat(lastName); };
console.log(printTeacher("John", "Doe"));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass("John", "Doe");
console.log(student.workOnHomework());
console.log(student.displayName());
