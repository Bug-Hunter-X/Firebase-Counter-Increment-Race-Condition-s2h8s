# Firebase Counter Increment Race Condition

This repository demonstrates a common error in Firebase when incrementing counters without using transactions.  This can lead to inconsistent data due to race conditions.

The `incrementCounterBug.js` file shows the flawed implementation, and `incrementCounterSolution.js` provides a correct solution using Firebase transactions.

## How to Reproduce

1. Set up a Firebase project.
2. Replace placeholders with your Firebase config.
3. Run `incrementCounterBug.js` multiple times concurrently (e.g., using multiple browser tabs or scripts). Observe that the counter value is not always accurately incremented.
4. Run `incrementCounterSolution.js` for comparison, demonstrating the proper transaction approach.