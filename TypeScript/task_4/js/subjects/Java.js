var Subjects;
(function (Subjects) {
    var Java = /** @class */ (function () {
        function Java() {
        }
        Java.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Java';
        };
        Java.prototype.getAvailableTeacher = function () {
            if (this.teacher && this.teacher.experienceTeachingJava > 0) {
                return "Available Teacher: ".concat(this.teacher.firstName);
            }
            else {
                return 'No available teacher';
            }
        };
        return Java;
    }());
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
