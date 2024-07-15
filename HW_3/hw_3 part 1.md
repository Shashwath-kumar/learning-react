## 1. Explain what is prototype and what is prototype chain in your own words

**Prototype**: In JavaScript, a prototype is an object that serves as a base for other objects. It contains properties and methods that are shared among all instances created from it. Each object has an internal link to its prototype.

**Prototype Chain**: The prototype chain is a lookup mechanism in JavaScript. When accessing a property or method on an object, if it's not found directly on the object, JavaScript traverses up the chain of prototypes. It checks the object's immediate prototype, then that prototype's prototype, continuing until it either finds the property/method or reaches the end of the chain (typically Object.prototype).

This chain structure enables inheritance in JavaScript, allowing objects to inherit properties and methods from their prototypes. It's fundamental to JavaScript's object-oriented programming model and plays a crucial role in the language's behavior.


For example, let's say we have a Person object:
```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log("Hi, I'm " + this.name);
};

let alice = new Person("Alice");
alice.sayHello(); // Outputs: Hi, I'm Alice
```

Here, `alice` inherits the `sayHello` method from `Person.prototype`.

The prototype chain is how JavaScript looks up properties or methods on objects. If an object doesn't have what you're looking for, JavaScript checks its prototype, then that prototype's prototype, and so on.

For instance:

```js
let arr = [1, 2, 3];
console.log(arr.toString()); // Outputs: 1,2,3
```

Even though we didn't define `toString` on our array, JavaScript finds it by going up the prototype chain: `arr -> Array.prototype -> Object.prototype`.

This chain lets objects share properties and methods, which is super useful for inheritance. It's a key part of how JavaScript works under the hood.
