// Challenge 1
/*  Create a function addTwo that accepts one input and adds 2 to it. */

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// ________________________________________________________________________________________________
// Challenge 2
/* 
Create a function addS that accepts one input and adds an "s" to it.
*/

const add =()

// uncomment these to check your work
//console.log(addS("pizza"));
//console.log(addS("bagel"));

// ________________________________________________________________________________________________
// Challenge 3
/* 
Create a function called map that takes two inputs:
1. An array of numbers (a list of numbers)
2. A 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
*/
//console.log(map([1, 2, 3], addTwo));


/*
cd /Users/lars/Documents/Backendcourse/   
mkdir folderName_5.0
touch backend_assignment.4.0.tsnpm init -y
npm i -D typescript ts-node
npx tsc —init

npx ts-node backend_assignment.4.0 

/*

// ASSIGNMENT 1
            type displayHelloFunction = (hello: string) => void;

                const helloCallback = (displayHello: displayHelloFunction):void => {
                displayHello("Hello from callback!!");
                };

                const displayHello = (hello: string): void => {
                    console.log(hello);
                    };

                helloCallback(displayHello); //The output will be "Hello from callback!!"

                const helloCallback = (displayHello: displayHelloFunction):void => {
                    displayHello("Hello from callback!");
                };

  
  
// ASSIGNMENT 2


        type displayGreetingFunction = (greet: string) => void;
        
            const delayedGreeting = (displayGreeting: displayGreetingFunction):void => {
            setTimeout(() => {
                const greet: string = "Hi I'm late!";
                displayGreeting(greet);
            }, 2000);
            };

            const displayGreeting = (greet: string): void => {
                console.log(greet);
                }
                delayedGreeting(displayGreeting); //The output will be "Hi I'm late!"

                


// ASSIGNMENT 3
          type printResultFunction = (result: number) => void;
  
            const calculate = (a: number, b:number, printResult: printResultFunction) => {
                    const result: number = a+b;
                    printResult(result);
                };

                const printResult = (result: number) => {
                    console.log("Result is: ", result);
            };
        
            calculate(40,14, printResult); //The output will be "Result is: 54"
        


// ASSIGNMENT 4

            
type toUpperCaseCallback = (name: string) => string;

function processName(name: string, callback: toUpperCaseCallback): void {
  const result = callback(name);
  console.log(result);
}

const convertToUpper = (name: string): string => {
  return name.toUpperCase();
};

processName("Alice", convertToUpper); // This will log: ALICE. This one i struggled a bit with and needed copilot to adjust my code.



// ASSIGNMENT 5


type displayOrderFunction = (order: string) => void;
        

const pizzaOrder = (displayOrder: displayOrderFunction):void => {
    console.log("Pizza ordered! Please wait while baking...");
    setTimeout(() => {
        const order: string = "Pizza is done!"; 
        displayOrder(order);
    }, 3000);
    }; 

    const displayDone = (order: string): void => {
    console.log(order); // The output is "Pizza ordered! Please wait while baking, and adds a delay of 2 seconds
}
    pizzaOrder(displayDone); //The output will be "Your pizza is Done!". This was more straightforward for me. Like assignment 2.

    */





