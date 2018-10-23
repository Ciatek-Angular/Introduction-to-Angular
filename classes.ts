// --Interface
interface IStudent {
    getStudent()
}

// --Class
class Student  implements IStudent{
    // private firstName: string;
    // private lastName: string;
    // private age: number;


    constructor(private firstName: string, private lastName: string, private age: number){
        // this.firstName = firstName
        // this.lastName = lastName
        // this.age = age
    }

    getStudent(){
        // console.log(`Student Name is: ${this.firstName} ${this.lastName} and his age is: ${this.age}`)
    }

    learn(){
        // console.log('learn about classes')
    }

}

class WebDevStudent extends Student {
    constructor( firstName: string,  lastName: string,  age: number, private field?){
        super(firstName, lastName, age)
    }
    getStudent(){
        super.getStudent()
        if(this.field){
            // console.log(`and he studies in ${this.field} field`)
        }
        return;
    }
}

let student: Student = new Student('rami', 'sami', 18)
student.getStudent()

let web_student: WebDevStudent = new WebDevStudent('hadi','sari',20,'Front end Development')
web_student.getStudent()