interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;  
    workTeacherTasks(): string;
}

export const Director = class Director implements DirectorInterface{
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to Director tasks";
    }
}

export const Teacher = class Teacher implements TeacherInterface{
    workFromHome(): string {
        return "Can not work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

export const createEmployee = (salary: number | string): DirectorInterface|TeacherInterface => {
    if ( typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

export const isDirector = (employee: DirectorInterface | TeacherInterface): employee is DirectorInterface => {
    return employee instanceof Director;
}

export const executeWork = (employee: DirectorInterface | TeacherInterface): string => {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

console.log(executeWork(createEmployee(200)))
console.log(executeWork(createEmployee(1000)))

type Subjects = "Math" | "History";


export const teachClass = (todayClass: Subjects): string => {
    
    if (todayClass === "Math") {
            return "Teaching Math";
    } else if (todayClass === "History") {
            return "Teaching History";
    }
    
}

console.log(teachClass("Math"));
console.log(teachClass("History"));