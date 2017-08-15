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
console.log(true && false)
// → false
console.log(true && true)
// → true

console.log(false || true)
// → true
console.log(false || false)
// → false
