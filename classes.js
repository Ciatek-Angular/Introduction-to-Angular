var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    // private firstName: string;
    // private lastName: string;
    // private age: number;
    function Student(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        // this.firstName = firstName
        // this.lastName = lastName
        // this.age = age
    }
    Student.prototype.getStudent = function () {
        // console.log(`Student Name is: ${this.firstName} ${this.lastName} and his age is: ${this.age}`)
    };
    Student.prototype.learn = function () {
        // console.log('learn about classes')
    };
    return Student;
}());
var WebDevStudent = /** @class */ (function (_super) {
    __extends(WebDevStudent, _super);
    function WebDevStudent(firstName, lastName, age, field) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.field = field;
        return _this;
    }
    WebDevStudent.prototype.getStudent = function () {
        _super.prototype.getStudent.call(this);
        if (this.field) {
            // console.log(`and he studies in ${this.field} field`)
        }
        return;
    };
    return WebDevStudent;
}(Student));
var student = new Student('rami', 'sami', 18);
student.getStudent();
var web_student = new WebDevStudent('hadi', 'sari', 20, 'Front end Development');
web_student.getStudent();
