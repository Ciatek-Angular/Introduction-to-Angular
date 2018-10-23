# TypeScript Exercise

1- Declare Numbers
---------------
### Create a new file named "exercise.ts" and include it inside index.html

- Create variables “variableA”, “variableB”, and “variableC” of type number.
- Now set each of the variables to some default values. Possibly 2, 3, and 4.
- Write out your values to the console.
- In your terminal, write "tsc exercices.ts" --> it will create exercises.js that the index.html can read


2- Declare Variables (Number, String, Boolean)
---------------
### In exercises.ts

- Create variables of types Boolean, String, and Number. Initialize these variables with values. 
- Send all 3 variables values to the console.
- **Note**: Don't forget to write in the terminal (tsc exercises.ts)


3- Declare enums
---------------
### In exercises.ts

- Create a color Enum using “Red”, “Green”, and “Blue”.
- Create a variable and set it equal to the “Green” enum value.
- Write out the value to the console.
- **Note**: Don't forget to write in the terminal (tsc exercises.ts)


4- Declare arrays
---------------
### In exercises.ts

- Create an array named “list1” with the values 1, 2, 3. Send result to the console.
- Create an array named “list2” with values 1,2,3. This time use a generic array. Send result to the console.
- Create an array named “anyList” with values 1,true,”three”. This time use type any to create the array. Send result to the console.
- Create an array named “list3” of type “string” and set its length to 10. Send result to the console.
- **Note**: Don't forget to write in the terminal (tsc exercises.ts)


5- Declare Interfaces
---------------
### In exercises.ts

- Create an interface named "IMovie"
- The interface has 3 properties
    - name of type string
    - length of type number
    - a function named "getMovie"
- Create a class and name it with the movie you like
- Make the class implements that Interface


6- Declare Arrow Function
---------------
### In exercises.ts

- Run the application with this code
```ts
// starts here

let restaurant = {
    chef: 'Ramzi',
    getChef: function(){
        return function(){
            console.log('Chef: ', this.chef)
        }
    }
}

// ends here
```
- Now Fix the code above
- **Note**: Don't forget to write in the terminal (tsc exercises.ts)




> **Note:** [If you feel you need more practice at TypeScript, just click here](http://mycodekatas.github.io/typescript.html)    
> **Note:** [If you feel you need more practice at ES6, just click here](https://medium.com/beginners-guide-to-mobile-web-development/introduction-to-es6-c4422d3c5664)   
> **Note:** [If you feel you need more practice at MarkDown Language, just click here](https://www.markdownguide.org/basic-syntax/#overview)   
> **Note:** [If you feel you need an online editor for Markdown language, just click here](https://dillinger.io/)   