export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
    }
interface Directors extends Teacher {
    numberOfReports: number;
}



const director1: Directors = {
    firstName: "John",
    lastName: "Doe",
    location: "New York",
    fullTimeEmployee: false,
    numberOfReports: 17
}

console.log(director1);


interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => `${firstName[0]}. ${lastName}`
console.log(printTeacher("John", "Doe"));



export interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClass
}

export interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}
class StudentClass  implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework());
console.log(student.displayName());