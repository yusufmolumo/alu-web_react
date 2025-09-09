namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }
    export class React  {
        teacher: Teacher;
        getRequirements() {
            return 'Here is the list of requirements for React';
        }

        getAvailableTeacher() {
            if (this.teacher && this.teacher.experienceTeachingReact > 0){
                return 'Available Teacher: '+ this.teacher.firstName
            } else {
                return "No available teacher"
            }

        }
    }
}