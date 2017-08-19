// Introduction
/*
It is up to you to make the necessary effort.
When you are struggling to follow the book, do not jump to any conclusions about your own capabilities.
You are fine—you just need to keep at it.

omputers themselves can do only stupidly straightforward things.
The reason they are so useful is that they do these things at an incredibly high speed.

Analogies that try to compare programs to objects we are familiar with tend to fall short.
A superficially fitting one is that of a machine—lots of separate parts tend to be involved,
and to make the whole thing tick, we have to consider the ways in which these parts interconnect and contribute to the operation of the whole.

JavaScript was introduced in 1995 as a way to add programs to web pages in the Netscape Navigator browser.
It is important to note that JavaScript has almost nothing to do with the programming language named Java.

Ecma International organization that did the standardization.
In practice, the terms ECMAScript and JavaScript can be used interchangeably—they are two names for the same language.

*/


//Chapter One

//Notes

/*
This chapter introduces the atomic elements of JavaScript programs, that is, the simple value types and the operators that can act on such values.

NUMBERS

Bits are any kind of two-valued things, usually described as zeros and ones.

For example, think about how you might show the number 13 in bits.
It works the same way you write decimal numbers, but instead of 10 different digits,
you have only 2, and the weight of each increases by a factor of 2 from right to left.
Here are the bits that make up the number 13, with the weights of the digits shown below them:

   0   0   0   0   1   1   0   1
 128  64  32  16   8   4   2   1
So that’s the binary number 00001101, or 8 + 4 + 1, which equals 13.

Imagine an ocean of bits:
To be able to work with such quantities of bits without getting lost, you can separate them into chunks that represent pieces of information.
In a JavaScript environment, those chunks are called values.

Every value has a type that determines its role. There are six basic types of values in JavaScript:
 numbers, strings, Booleans, objects, functions, and undefined values.

% named modulo operator and author thinks it should be called the remainder opperator.

There are three special values in JavaScript that are considered numbers but don’t behave like normal numbers.
The first two are Infinity and -Infinity, which represent the positive and negative infinities.
Don’t put too much trust in infinity-based computation. It isn’t mathematically solid, and it will quickly lead to our next special number: NaN.
You’ll get this result when you, for example, try to calculate 0 / 0 (zero divided by zero),
Infinity - Infinity, or any number of other numeric operations that don’t yield a precise, meaningful result.

NaN stands for “not a number”


STRINGS

Almost anything can be put between quotes, and JavaScript will make a string value out of it, But a few characters are more difficult.
To make it possible to include such characters in a string, the following notation is used:
whenever a backslash (\) is found inside quoted text, it indicates that the character after it has a special meaning.

For new lines in strings do a forward backslash followed by a n.
"This is the first line\nAnd this is the second"

If two backslashes follow each other, they will collapse together, and only one will be left in the resulting string value.
This is how the string “A newline character is written like "\n".” can be expressed:

"A newline character is written like \"\\n\"."

--UNARY OPPERATORS

typeof operator, produces a string value naming the type of the value you give it.

console.log(typeof 4.5)
// → number
console.log(typeof "x")
// → string

 **** The other operators we saw all operated on two values, but typeof takes only one.
 Operators that use two values are called binary operators, while those that take one are called unary operators.

--Boolean values
JavaScript has a Boolean type, which has just two values: true and false (which are written simply as those words)

Other similar operators are >= (greater than or equal to), <= (less than or equal to), == (equal to), and != (not equal to).
console.log("Itchy" != "Scratchy")
// → true

There is only one value in JavaScript that is not equal to itself, and that is NaN, which stands for “not a number”.

console.log(NaN == NaN)
// → false

--Logical operators
There are also some operations that can be applied to Boolean values themselves.
JavaScript supports three logical operators: and, or, and not. These can be used to “reason” about Booleans.

The && operator represents logical and. It is a binary operator, and its result is true only if both the values given to it are true.

The || operator denotes logical or. It produces true if either of the values given to it is true.

Not is written as an exclamation mark (!). It is a unary operator that flips the value given to it—!true produces false and !false gives true.

The last logical operator I will discuss is not unary, not binary, but ternary, operating on three values.
It is written with a question mark and a colon, like this:
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2

--Undefined values

There are two special values, written null and undefined, that are used to denote the absence of a meaningful value.
They are themselves values, but they carry no information.


*/

//////////////    JS Testing For Chapter One

///////Numbers

/*
//exponent
var nums = 4e4

console.log(nums);
*/

//////Strings


////////Logical operators
/*
console.log(true && false)
// → false
console.log(true && true)
// → true

console.log(false || true)
// → true
console.log(false || false)
// → false
*/


/////////////// CHAPTER 2 PROGRAM STRUCTURE

//////////////Notes

/*
////Expressions and statements
A fragment of code that produces a value is called an expression.

If an expression corresponds to a sentence fragment, a JavaScript statement corresponds to a full sentence in a human language.
 A program is simply a list of statements.

A statement stands on its own and amounts to something only if it affects the world.
 It could display something on the screen—that counts as changing the world
 or it could change the internal state of the machine in a way that will affect the statements that come after it. These changes are called side effects.


////Variables
To catch and hold values, JavaScript provides a thing called a variable.

var indicates that this sentence is going to define a variable.
It is followed by the name of the variable and, if we want to immediately give it a value, by an = operator and an expression.

After a variable has been defined, its name can be used as an expression.

rules for variables:
  Variable names can be any word that isn’t a reserved word (such as var).
  They may not include spaces.
  Digits can also be part of variable names—catch22 is a valid name, for example—but the name must not start with a digit.
  A variable name cannot include punctuation, except for the characters $ and _. mn(angularJS's $scope makes sense now)

When a variable points at a value, that does not mean it is tied to that value forever.
The = operator can be used at any time on existing variables to disconnect them from their current value and have them point to a new one.

You should imagine variables as tentacles, rather than boxes.
They do not contain values; they grasp them—two variables can refer to the same value.

A single var statement may define multiple variables. The definitions must be separated by commas.


////Keywords and reserved words

Words with a special meaning, such as var, are keywords, and they may not be used as variable names.
There are also a number of words that are “reserved for use” in future versions of JavaScript.

break case catch class const continue debugger
default delete do else enum export extends false
finally for function if implements import in
instanceof interface let new null package private
protected public return static super switch this
throw true try typeof var void while with yield

Don’t worry about memorizing these, but remember that this might be the problem when a variable definition does not work as expected.


////The environment
The collection of variables and their values that exist at a given time is called the environment.


////Functions
A function is a piece of program wrapped in a value.
Executing a function is called invoking, calling, or applying it.
Values given to functions are called arguments


////The console.log function
Most JavaScript systems (including all modern web browsers and Node.js)
provide a console.log function that writes out its arguments to some text output device.
It is actually an expression that retrieves the log property from the value held by the console variable.


////Return values
Showing a dialog box or writing text to the screen is a side effect
Functions may also produce values, and in that case, they don’t need to have a side effect to be useful.
For example, the function Math.max takes any number of number values and gives back the greatest.

////Prompt and confirm
You can ask the user an OK/Cancel question using confirm.
This returns a Boolean: true if the user clicks OK and false if the user clicks Cancel.

The prompt function can be used to ask an “open” question.
The first argument is the question, the second one is the text that the user starts with.
A line of text can be typed into the dialog window, and the function will return this text as a string.


////Control flow
When your program contains more than one statement, the statements are executed, predictably, from top to bottom.
Here is the rather trivial schematic representation of straight control flow:
========>


////Conditional execution
An alternative to strait control flow is conditional execution, where we choose between two different routes based on a Boolean value.
Conditional execution is written with the if keyword in JavaScript.

This alternate path is represented by the second arrow in the diagram.
The else keyword can be used, together with if, to create two separate, alternative execution paths.

If we have more than two paths to choose from, multiple if/else pairs can be “chained” together. Here’s an example:


////while and do loops
That works, but the idea of writing a program is to make something less work, not more.
What we need is a way to repeat some code. This form of control flow is called a loop:

Looping control flow allows us to go back to some point in the program where we were before and repeat it with our current program state.

A statement starting with the keyword while creates a loop.
The word while is followed by an expression in parentheses and then a statement, much like if.
The loop executes that statement as long as the expression produces a value that is true when converted to Boolean type.

Many JavaScript programmers wrap every single loop or if body in braces.
In this book, I will write most single-statement bodies without braces, since I value brevity.


////Indenting Code
In fact, even the line breaks in programs are optional.
You could write a program as a single long line if you felt like it.
The role of the indentation inside blocks is to make the structure of the code stand out.


////For loops
    for (var number = 0; number <= 12; number = number + 2)
    console.log(number);
This program is exactly equivalent to the earlier even-number-printing example.
The only change is that all the statements that are related to the “state” of the loop are now grouped together.


////Breaking Out of a Loop
Having the loop’s condition produce false is not the only way a loop can finish.
There is a special statement called break that has the effect of immediately jumping out of the enclosing loop.

for (var current = 20; ; current++) {
  if (current % 7 == 0)
    break;
}
console.log(current);
// → 21

The for construct in the example does not have a part that checks for the end of the loop.
This means that the loop will never stop unless the break statement inside is executed.

The continue keyword is similar to break, in that it influences the progress of a loop.
When continue is encountered in a loop body, control jumps out of the body and continues with the loop’s next iteration.


////Updating variables succinctly
For counter += 1 and counter -= 1, there are even shorter equivalents: counter++ and counter--.


////Dispatching on a value with switch
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}

The program will jump to the label that corresponds to the value that switch was given or to default if no matching value is found.
It starts executing statements there, even if they’re under another label, until it reaches a break statement.


////Capitalization
Variable names may not contain spaces, yet it is often helpful to use multiple words to clearly describe what the variable represents.
The standard JavaScript functions, and most JavaScript programmers, follow the bottom style—they capitalize every word except the first.

In a few cases, such as the Number function, the first letter of a variable is also capitalized.
This was done to mark this function as a constructor.


////Comments
Often, raw code does not convey all the information you want a program to convey to human readers,
or it conveys it in such a cryptic way that people might not understand it.
 At other times, you might just feel poetic or want to include some thoughts as part of your program. This is what comments are for.



*/



//////////////    JS Testing For Chapter 2

////variables
/*var caught = 5 * 5;

var mood = "light";
console.log(mood);
// → light
mood = "dark";
console.log(mood);
// → dark

var luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105

var one = 1, two = 2;
console.log(one + two);
// → 3

var x = 30;
console.log("the value of x is", x);
// → the value of x is 30

var num = Number(prompt("Pick a number", "0"));

if (num < 10)
  alert("Small");
else if (num < 100)
  alert("Medium");
else
  alert("Large");
*/
