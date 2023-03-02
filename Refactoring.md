# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

1. Unit test cases are written inside dpk.test.js. Mock for the hash has also been added.
2. Refactor has also been done , used jest for unit test cases
3. Changes Made:

// Used optional chaining operator to check if event and event.partitionKey exists in a single line.
// Combined the stringification and hashing operation in one statement for candidate.
// Simplified the check for candidate to convert it to a string if it's not already a string.
// Combined the final check for the length of candidate and hashing operation into one statement for partitionKey.
// Assigned the final result to partitionKey variable to make it more readable.

