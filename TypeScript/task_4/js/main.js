var Subjects;
(function (Subjects) {
    Subjects.cpp = new Cpp();
    Subjects.java = new Java();
    Subjects.react = new React();
    Subjects.cTeacher = {
        firstName: "Christabel M",
        lastName: "Muli",
        experienceTeachingC: 10,
    };
    Subjects.cpp.setTeacher(Subjects.cTeacher);
    console.log("C++  ".concat(Subjects.cpp.getRequirements(), " ").concat(Subjects.cpp.getAvailableTeacher()));
    console.log("Java  ".concat(Subjects.cpp.getRequirements(), " ").concat(Subjects.cpp.getAvailableTeacher()));
    console.log("React  ".concat(Subjects.cpp.getRequirements(), " ").concat(Subjects.cpp.getAvailableTeacher()));
})(Subjects || (Subjects = {}));
