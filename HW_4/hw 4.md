1. What is the difference between instance methods and static methods?


    Instance methods are functions that operate on individual instances of a class. They have access to the instance's properties via the `this` keyword and are called on object instances. 
    
    Static methods, in contrast, are associated with the class itself rather than its instances. They cannot access instance-specific data and are typically used for utility functions related to the class

    example:
    ```js
    class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() { // Instance method
        return this.width * this.height;
    }

    static compareAreas(rect1, rect2) { // Static method
        return rect1.calculateArea() - rect2.calculateArea();
    }
    }

    const rect1 = new Rectangle(5, 3);
    console.log(rect1.calculateArea()); // 15
    console.log(Rectangle.compareAreas(rect1, new Rectangle(4, 4))); // -1
    ```
2. How does Javascript handle concurrency?

    JavaScript employs an event-driven, non-blocking I/O model to handle concurrency. It utilizes a single-threaded event loop to manage asynchronous operations. When an asynchronous operation is initiated, it's offloaded to the browser or Node.js runtime, allowing the main thread to continue execution. Upon completion, the operation's callback is placed in the event queue, to be executed when the call stack is empty.

    This model allows JavaScript to handle multiple operations concurrently without multi-threading, making it efficient for I/O-bound tasks but less suitable for CPU-intensive operations.

3. What is async/await? How does it differ from using the promise instance methods?


    Async/await is a syntactic feature built on top of Promises, providing a more synchronous-looking way to write asynchronous code. An async function always returns a Promise, and the await keyword can only be used inside async functions.

    The primary differences are:

    - Readability: Async/await often leads to more readable code, especially for complex Promise chains.
    - Error handling: Try/catch blocks can be used with async/await, similar to synchronous code.
    - Debugging: Async/await makes setting breakpoints and stepping through code easier

4. Can you use await outside of an async function?

    Traditionally, the await keyword could only be used within an async function. However, recent JavaScript specifications have introduced "top-level await," allowing await to be used at the module level outside of async functions. This feature is particularly useful for module initialization

    Example:
    ```js
    // fetch request
    const colors = fetch("../data/colors.json").then((response) => response.json());

    export default await colors;
    ```
5. What is callback hell and why is it considered a problem?

    "Callback hell" refers to the situation where multiple nested callbacks create code that is difficult to read, understand, and maintain. This often occurs in asynchronous programming when several operations depend on the results of previous operations.

    The problems associated with callback hell include:
    - Reduced readability and maintainability
    - Difficulty in handling errors effectively
    - Challenges in implementing proper control flow
    
    To mitigate these issues, modern JavaScript often employs Promises, async/await, or functional programming techniques to flatten the structure and improve code organization.