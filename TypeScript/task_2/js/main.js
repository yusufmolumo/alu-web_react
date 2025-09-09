"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teachClass = exports.executeWork = exports.isDirector = exports.createEmployee = exports.Teacher = exports.Director = void 0;
exports.Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to Director tasks";
    };
    return Director;
}());
exports.Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Can not work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
var createEmployee = function (salary) {
    if (typeof salary === "number" && salary < 500) {
        return new exports.Teacher();
    }
    else {
        return new exports.Director();
    }
};
exports.createEmployee = createEmployee;
var isDirector = function (employee) {
    return employee instanceof exports.Director;
};
exports.isDirector = isDirector;
var executeWork = function (employee) {
    if ((0, exports.isDirector)(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
};
exports.executeWork = executeWork;
console.log((0, exports.executeWork)((0, exports.createEmployee)(200)));
console.log((0, exports.executeWork)((0, exports.createEmployee)(1000)));
var teachClass = function (todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else if (todayClass === "History") {
        return "Teaching History";
    }
};
exports.teachClass = teachClass;
console.log((0, exports.teachClass)("Math"));
console.log((0, exports.teachClass)("History"));
