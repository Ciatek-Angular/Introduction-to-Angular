// ************* TypeScript *************
// --boolean
var bool = true;
// --number
var number = 4;
// --string
var str = "rgreh45";
// str=  count.toString()
// str = function(): string{
//     return 'this string'
// }()
// --array 1
var arr = ['gerr', 'ergr', 4543, true, (234).toString()];
// --array 2
var arr2 = ['gerr', 'ergr', 4543, true];
// --array 3
var arr3 = ['gerr', 'ergr', 4543, true, null, undefined];
// --enum
var Days;
(function (Days) {
    Days["MONDAY"] = "mon";
    Days["TUESDAY"] = "tues";
    Days["WEDNESDAY"] = "wed";
})(Days || (Days = {}));
var mon = Days.MONDAY;
var tues = Days.TUESDAY;
var WED = Days.WEDNESDAY;
