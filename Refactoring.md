# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
1. The first change I made is returning "0" earlier in case event is not provided. That makes the first case scenario for the function easier to understand and avoid running unnecessary checks.
2. The second change is to remove the check if candidate is of type string. The hash always return as string, so makes sense to automatically parse it as a string in the only case where could be a different type: if `event.partitionKey` is provided as a different type.
3. The third change is being explicit for the case of when `event.partitionKey` is not provided. With the previous else, the condition could be too "general" and introduce bugs for unknown cases.
