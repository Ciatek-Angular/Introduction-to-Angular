// ************* ES6 *************
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// --const
var count = 1;
// --let
var student1 = 'sami';
var student2 = 'rami';
// --Template literals
var myName = 'Dave';
var myFullName = "Hello, my name is " + myName + " David";
// console.log(myFullName); //Hello , my name is Dave David
// --Default Parameter
function greeting(name) {
    if (name === void 0) { name = "Anonymous"; }
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
var ciatek = {
    mentor: 'Ahmad',
    strudents: ['rami', 'sami', 'nami'],
    getMentor: function () {
        return function () {
            // console.log('test', this.mentor)
        };
    }
};
ciatek.getMentor()();
// Spread (...) and Destructure [] || {}
// Spread example 1
var animals1 = ['cat', 'dog', 'rabbit'];
var total_animals = animals1.concat(['fish', 'lion']);
// console.log(total_animals)
// Spread example 2
var ciatek_student = {
    firstName: 'rami',
    lastName: 'itani'
};
var ciatek_student_detail = __assign({}, ciatek_student, { address: 'Lebanon/beirut', phone: '01/306090' });
// console.log(ciatek_student_detail)
// console.log(`Ciatek student full name is ${ciatek_student_detail.firstName} ${ciatek_student_detail.lastName} and he lives in ${ciatek_student_detail.address}`)
// Spread example 3
var numbers = [1, 2, 3];
function sum(a, b, c) {
    return a + b + c;
}
// console.log(sum(...numbers))
// Destructure
var employee = {
    employee_name: 'John Doe',
    salary: 5000,
    skills: ['time management', 'teamwork']
};
var employee_name = employee.employee_name, salary = employee.salary, skills = employee.skills;
// console.log(`employee name:  ${employee_name} and salary is: ${salary} with skills are: ${skills}`)
// let employee_name = employee.name
// let salary = employee.salary
// let skills = employee.skills
