/*
 * Data Types
 * 
 * In this assignment, we will explore some of the most commmonly used
 * data types in TypeScript. We will also fix a lot of bugs!
 * 
 */

 //---------------------------------------------------//

function doNothing() {

}

function addNumbers(a:number,b:number) {
    // Takes two numbers and adds them, returning the result.
    return a + b;
}
/* TASK 1: Hover your mouse over the word "doNothing" and then the word "addNumbers" above. 
 * For each one, a popup should come up that describes
 * the *signature* of the function - it should show the NAME of the function, the names
 * and types of the PARAMETERS, and the OUTPUT type of the function.
 * 
 * Two questions:
 * 
 * a) What is the output type of doNothing?
 * 
 * b) What is the output type of addNumbers?
 * 
 * You should notice that we did not WRITE the output type for addNumbers, but TypeScript figured
 * it out. This is called `type inference`.
 */

// TASK 2. Change the word after the colon to remove the error from the following line.
let var1:string= addNumbers(2,8.9);

/* The command `console.log` below prints information to the debug console. It's a good way to make sure things
 * are doing what you expect. Since USERS don't see the debug console, usually, it's like a private way to 
 * give messages to yourself when the program runs.
 *
 * TASK 2. Complete the sentence
 * I predict the line below will print ___________________
 */
console.log('The value of var1 is ' + var1);



//-----------------WORKING WITH NUMBERS-------------------//

/*
 * TASK 3 - uncomment the function below by selecting it and pressing CTRL+\ or CMD+\,
 *  then complete the function below so that it takes two numeric parameters
 * and returns the difference (second - first). Model it after addNumbers.
 */
function subtractNumbers() {
    //COMPLETE
    return 2;
}

// Notice that in the line below, I don't tell TypeScript that var2 is a number.
// If subtractNumbers always returns a number, TypeScript will *infer* that var2 is a number too.
let var2= subtractNumbers(2, 8);

// TASK 4. Complete the sentence.
// If subtractNumbers works, var2 should equal ___________


/* The if statement below is called a `unit test` - it checks whether one function is doing
 * what we want. A good unit test would check more than one input, but this is a start.
 *
 * TASK 5 - complete the unit test, replacing the 0 with the value you predicted above.
 */
if (var2 == 0) {
    console.log("Test 1 passed: subtractNumbers function did good!")
}else{
    console.log("Test 1 failed: something's wrong with subtractNumbers...");
}

/* TASK 6 - Write a function named `multDiv` below that takes three parameters (you choose the names!)
 *  and returns the value of the first one times the second one divided by the third one.
 *  To multiply, use an asterisk, `*`, and to divide use a slash, `/`.
 */




// I have written a unit test for multDiv below. You shouldn't need to change it.

if (multDiv(4,7,2) == 14) {
    console.log("Test 2 passed: multDiv seems to be working with these inputs!");
}else{
    console.log("Test 2 failed: you need to fix the function multDiv");
}


//-----------------------------------------------------------------------------------//

/*
 * WORKING WITH BOOLEANS
 * A boolean is a "true" or "false" value, 
 * often found with the help of comparisons.
 */

function twoEqual(a:number,b:number):boolean {
    /*
     * The symbol "==" is a CHECK for equality. It checks if two things are equal.
     * Therefore this always gives a TRUE or FALSE value - a boolean!
     * In Typescript, you can also use "===", which some prefer for technical reasons.
     */
     
    return (a == b);
}

//  TASK 6 - fix the variable type below.
let b1:number = twoEqual(3, 3);

// TASK 7 - complete the function below. It should take two numbers and return true
// if the first one is greater than the second one, and false otherwise.
function firstGreater() {

}

// Unit test time! 
let b2:boolean = firstGreater(7, 7); // should be false, since 7 is not greater than 7
let b3:boolean = firstGreater(3, 2); // should be true

// notice that a boolean value can be used in an if statement
// all by itself!
if ( b2 ) {
    console.log("Test 3 failed: b2 is true but should be false. firstGreater broken?");
} else {
    if ( b3 ) {
        console.log("Test 3 passed: firstGreater working!");
    }else {
        console.log("Test 3 failed: b3 is false, but should be true!");
    }
}

//-----------------------------------------------------------------------------//
/* WORKING WITH STRINGS
 *
 * strings are groups of text characters, suitable for printing on the screen.
 * string values are always enclosed in quotes.
 */


 // TASK 8 - change the VALUES below, not the types, to make these assignments work.

 let twentyThree1:string = 23;

 let twentyThree2:number = "23";

// what do you think the 'parseInt' function below does?

let twentyThree3:number = parseInt("23");

// TASK 9 - Predict the outputs of the following three outputs.
console.log("First", twentyThree1 + 2);
// The output will be...

console.log("Second", twentyThree2 + 2);
// The output will be...

console.log("Third", twentyThree3 + 2);
// The output will be...


// The function below is almost identical to addNumbers!
function addStrings(a:string, b:string) {
    return a + b;
}

// TASK 10 - Predict
// What will addStrings("a", "b") return
// 
console.log('addStrings("a","b") = ', addStrings("a","b"));

// TASK 11 - Build and test!
// At this point, you should hopefully have solved all of the errors and written all
// of your functions. Go ahead a build (Ctrl-Shift-B or Cmd-Shift-B, choose 'tsc:build')
// then debug with node (press F5 and choose 'NodeJS') and look at the output in the debug console. 
// Fix any errors or failed tests, and, below, write any predictions you made that didn't come true.

/*




*/


//ignore but don't remove...
debugger;
