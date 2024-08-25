### Problem Description

You need to create a function `createCounter` that takes a single integer as its parameter and returns an object with three specific methods: `getCounter`, `increaseCounter`, and `decreaseCounter`. 

- The `getCounter` method should return the current value of the counter, which initially equals the integer passed to `createCounter`.
- The `increaseCounter` method should increment the counter by 1.
- The `decreaseCounter` method should decrement the counter by 1.

The object returned by `createCounter` should only have these three methods and no other keys. The counter value should be encapsulated within the `createCounter` function, meaning it cannot be accessed or modified directly from outside the returned object.

### Hints

1. **Use Closures**: Since JavaScript functions can form closures, use a local variable inside `createCounter` to store the counter's value. The methods `getCounter`, `increaseCounter`, and `decreaseCounter` should have access to this local variable via closure.

2. **Encapsulation**: Make sure that the counter variable is not accessible directly from outside the returned object. This ensures that the value can only be modified through the provided methods.

3. **Method Binding**: Ensure that the methods in the returned object are bound to the internal scope of the `createCounter` function so they can correctly manipulate and return the counter value.

### Solution Approach

1. **Define the Counter**: Inside `createCounter`, define a local variable `counter` to hold the initial value passed as a parameter.

2. **Create Methods**: Define three functions inside `createCounter`:
   - `getCounter`: returns the current value of `counter`.
   - `increaseCounter`: increments the value of `counter` by 1.
   - `decreaseCounter`: decrements the value of `counter` by 1.

3. **Return the Object**: Return an object containing the three methods, ensuring no other properties are exposed.

### Code Stub

```javascript
function createCounter(initialValue) {
    // Implement the solution here
}
```

### Complete Solution

```javascript
function createCounter(initialValue) {
    let counter = initialValue;

    function getCounter() {
        return counter;
    }

    function increaseCounter() {
        counter += 1;
    }

    function decreaseCounter() {
        counter -= 1;
    }

    return {
        getCounter,
        increaseCounter,
        decreaseCounter
    };
}
```

### Test Cases

1. **Initial Counter Value**
   ```javascript
   var counter = createCounter(4);
   console.assert(counter.getCounter() === 4, "Test Case 1 Failed");
   ```

2. **Increment Counter**
   ```javascript
   counter.increaseCounter();
   console.assert(counter.getCounter() === 5, "Test Case 2 Failed");
   ```

3. **Decrement Counter**
   ```javascript
   counter.decreaseCounter();
   console.assert(counter.getCounter() === 4, "Test Case 3 Failed");
   ```

4. **Multiple Increments**
   ```javascript
   counter.increaseCounter();
   counter.increaseCounter();
   console.assert(counter.getCounter() === 6, "Test Case 4 Failed");
   ```

5. **Multiple Decrements**
   ```javascript
   counter.decreaseCounter();
   counter.decreaseCounter();
   console.assert(counter.getCounter() === 4, "Test Case 5 Failed");
   ```

These test cases should validate that your implementation of `createCounter` works as expected, correctly managing the counter's value through the methods provided.