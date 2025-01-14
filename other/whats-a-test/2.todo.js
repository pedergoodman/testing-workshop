// writing an assertion library
/*

Now let's implement our own assertion library.
Create a function called `expect` that accepts an "actual"
and returns an object of assertions.

Tip: I want to be able to use it like so:

> expect(actual).toBe(expected)

Then run this code with `node 2.todo`

> Make sure you're in the right directory!

 */

const {sum, subtract} = require('./math')

let result, expected 


result = sum(3, 7)
expected = 10
expect(result).toBe(expected)



//* original - per function
// if (result !== expected) {
//   throw new Error(`${result} is not equal to ${expected}`)
// }

// result = subtract(7, 3)
// expected = 4
// if (result !== expected) {
//   throw new Error(`${result} is not equal to ${expected}`)
// }

// cleaner code, but has problems
// can't detect which function is broken or what is broken -- the message isn't clear
// it's not running all of our tests

function expect(actual) {
  return {
    toBe(expected) {
      if (result !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}

