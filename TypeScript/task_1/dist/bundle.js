/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ1FBLElBQU0sU0FBUyxHQUFjO0lBQ3pCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsUUFBUSxFQUFFLFVBQVU7SUFDcEIsZ0JBQWdCLEVBQUUsS0FBSztJQUN2QixlQUFlLEVBQUUsRUFBRTtDQUN0QjtBQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFPdkIsSUFBTSxZQUFZLEdBQXlCLFVBQUMsU0FBUyxFQUFFLFFBQVEsSUFBSyxpQkFBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLGVBQUssUUFBUSxDQUFFLEVBQTlCLENBQThCO0FBQ2xHLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBWXpDO0lBSUksc0JBQVksU0FBaUIsRUFBRSxRQUFnQjtRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBQ0QscUNBQWMsR0FBZDtRQUNJLE9BQU8sbUJBQW1CLENBQUM7SUFDL0IsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQztBQUVELElBQU0sT0FBTyxHQUFHLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGludGVyZmFjZSBUZWFjaGVyIHtcbiAgICByZWFkb25seSBmaXJzdE5hbWU6IHN0cmluZztcbiAgICByZWFkb25seSBsYXN0TmFtZTogc3RyaW5nO1xuICAgIGZ1bGxUaW1lRW1wbG95ZWU6IGJvb2xlYW47XG4gICAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXI7XG4gICAgbG9jYXRpb246IHN0cmluZztcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gICAgfVxuaW50ZXJmYWNlIERpcmVjdG9ycyBleHRlbmRzIFRlYWNoZXIge1xuICAgIG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xufVxuXG5cblxuY29uc3QgZGlyZWN0b3IxOiBEaXJlY3RvcnMgPSB7XG4gICAgZmlyc3ROYW1lOiBcIkpvaG5cIixcbiAgICBsYXN0TmFtZTogXCJEb2VcIixcbiAgICBsb2NhdGlvbjogXCJOZXcgWW9ya1wiLFxuICAgIGZ1bGxUaW1lRW1wbG95ZWU6IGZhbHNlLFxuICAgIG51bWJlck9mUmVwb3J0czogMTdcbn1cblxuY29uc29sZS5sb2coZGlyZWN0b3IxKTtcblxuXG5pbnRlcmZhY2UgUHJpbnRUZWFjaGVyRnVuY3Rpb24ge1xuICAgIChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZztcbn1cblxuY29uc3QgcHJpbnRUZWFjaGVyOiBQcmludFRlYWNoZXJGdW5jdGlvbiA9IChmaXJzdE5hbWUsIGxhc3ROYW1lKSA9PiBgJHtmaXJzdE5hbWVbMF19LiAke2xhc3ROYW1lfWBcbmNvbnNvbGUubG9nKHByaW50VGVhY2hlcihcIkpvaG5cIiwgXCJEb2VcIikpO1xuXG5cblxuaW50ZXJmYWNlIFN0dWRlbnRDbGFzc0NvbnN0cnVjdG9yIHtcbiAgICBuZXcoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBTdHVkZW50Q2xhc3Ncbn1cblxuaW50ZXJmYWNlIFN0dWRlbnRDbGFzc0ludGVyZmFjZSB7XG4gICAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5nO1xuICAgIGRpc3BsYXlOYW1lKCk6IHN0cmluZztcbn1cbmNsYXNzIFN0dWRlbnRDbGFzcyAgaW1wbGVtZW50cyBTdHVkZW50Q2xhc3NJbnRlcmZhY2Uge1xuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIGxhc3ROYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xuICAgIH1cbiAgICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJDdXJyZW50bHkgd29ya2luZ1wiO1xuICAgIH1cblxuICAgIGRpc3BsYXlOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpcnN0TmFtZTtcbiAgICB9XG59XG5cbmNvbnN0IHN0dWRlbnQgPSBuZXcgU3R1ZGVudENsYXNzKFwiSm9oblwiLCBcIkRvZVwiKTtcbmNvbnNvbGUubG9nKHN0dWRlbnQud29ya09uSG9tZXdvcmsoKSk7XG5jb25zb2xlLmxvZyhzdHVkZW50LmRpc3BsYXlOYW1lKCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==