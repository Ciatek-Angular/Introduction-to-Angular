// ************* ES6 *************

// --const
const count = 1;

// --let
let student1 = 'sami';
let student2 = 'rami';

// --Template literals

const myName = 'Dave';
const myFullName = `Hello, my name is ${myName} David`;
// console.log(myFullName); //Hello , my name is Dave David

// --Default Parameter

function greeting(name = "Anonymous") {
    return "Hello " + name;
  }
//   console.log(greeting("Dave")); // Hello Dave
//   console.log(greeting()); // Hello Anonymous


// --Arrow Functions

// let ciatek = {
//     mentor: '',
//     strudents:['rami','sami','nami'],
//     getMentor: function(){
//         return function(){
//             console.log('test', this.mentor)
//         }
//     }
// }

let ciatek = {
    mentor: 'Ahmad',
    strudents:['rami','sami','nami'],
    getMentor: function(){
        return () => {
            // console.log('test', this.mentor)
        }
    }
}

ciatek.getMentor()()


// Spread (...) and Destructure [] || {}

// Spread example 1
let animals1: string[] = ['cat','dog','rabbit']
let total_animals: string[] = [...animals1,'fish','lion']
// console.log(total_animals)

// Spread example 2
let ciatek_student: any = {
    firstName: 'rami',
    lastName: 'itani'
}

let ciatek_student_detail = {
    ...ciatek_student,
    address: 'Lebanon/beirut',
    phone: '01/306090'
}
// console.log(ciatek_student_detail)
// console.log(`Ciatek student full name is ${ciatek_student_detail.firstName} ${ciatek_student_detail.lastName} and he lives in ${ciatek_student_detail.address}`)


// Spread example 3
let numbers: number[] = [1,2,3]

function sum(a?,b?,c?){
    return a + b + c 
}

// console.log(sum(...numbers))


// Destructure
let employee: any = {
    employee_name:'John Doe',
    salary: 5000,
    skills:['time management', 'teamwork']
}

let { employee_name, salary, skills } = employee
// console.log(`employee name:  ${employee_name} and salary is: ${salary} with skills are: ${skills}`)
// let employee_name = employee.name
// let salary = employee.salary
// let skills = employee.skills