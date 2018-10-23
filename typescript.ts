// ************* TypeScript *************

// --boolean
let bool: boolean = true

// --number
let number: number = 4;

// --string
let str: string = "rgreh45"
// str=  count.toString()
// str = function(): string{
//     return 'this string'
// }()


// --array 1
let arr: Array<string | number | boolean> = ['gerr','ergr',4543, true, (234).toString()];

// --array 2
let arr2: (string | number | boolean)[] = ['gerr','ergr',4543, true];

// --array 3
let arr3: any[] = ['gerr','ergr',4543, true, null, undefined];

// --enum
enum Days {
    MONDAY = 'mon',
    TUESDAY = 'tues',
    WEDNESDAY = 'wed'
}

let mon: Days = Days.MONDAY
let tues: Days = Days.TUESDAY
let WED: Days = Days.WEDNESDAY