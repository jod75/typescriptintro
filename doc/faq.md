# FAQ

Here are some questions about TypeScript for beginners. Each question is followed by a brief code snippet that demonstrates the concept:

1. **Declaring Variables:**
   - How do you declare a variable in TypeScript?
   
   ```typescript
   let myNumber: number = 42; // the answer to the Ultimate Question of Life, the Universe, and Everything
   ```

2. **Type Inference:**
   - Can TypeScript infer the data type of a variable automatically?
   
   ```typescript
   let myString = "Hello, TypeScript!"; // Inferred as a string
   ```

3. **Basic Data Types:**
   - What are some basic data types in TypeScript?
   
   ```typescript
   let name: string = "Joseph";
   let age: number = 15; // ha ha
   let isStudent: boolean = true;
   ```

4. **Type Annotations:**
   - How can you explicitly specify a variable's data type?
   
   ```typescript
   let price: number = 19.99;
   ```

5. **Arrays:**
   - How do you declare and initialize an array in TypeScript?
   
   ```typescript
   let numbers: number[] = [1, 2, 3, 4, 5];
   ```

6. **Functions:**
   - How do you define a function with TypeScript?
   
   ```typescript
   function greet(name: string): string {
       return `Hello, ${name}!`;
   }
   ```

7. **Objects:**
   - How do you define and use an object in TypeScript?
   
   ```typescript
   let person: { name: string, age: number } = { name: "Joseph", age: 15 };
   ```

8. **Interfaces:**
   - What are interfaces in TypeScript, and how do you use them?
   
   ```typescript
   interface Car {
       make: string;
       model: string;
       year: number;
   }

   const myCar: Car = { make: "Toyota", model: "Vitz", year: 2018 };
   ```

9. **Type Union:**
   - How can you create a variable that can have multiple data types?
   
   ```typescript
   let result: string | number = "Success";
   result = 42;
   ```

10. **Type Aliases:**
    - How can you simplify complex type definitions with type aliases?
    
    ```typescript
    type Point = { x: number; y: number };
    let origin: Point = { x: 0, y: 0 };
    ```

11. **Type Assertion:**
    - How do you perform type assertion in TypeScript?
    
    ```typescript
    let value: any = "Hello, TypeScript!";
    let length = (value as string).length;
    ```

12. **Classes:**
    - How do you define and instantiate a class in TypeScript?
    
    ```typescript
    class Dog {
        constructor(public name: string) {}
        bark() {
            console.log(`${this.name} says woof!`);
        }
    }

    const myDog = new Dog("Buddy");
    myDog.bark();
    ```

13. **Enums:**
    - What are enums, and how can you use them in TypeScript?
    
    ```typescript
    enum Color {
        Red,
        Green,
        Blue
    }

    let selectedColor: Color = Color.Green;
    ```

14. **Conditional Statements:**
    - How do you use conditional statements (if-else) in TypeScript?
    
    ```typescript
    let score: number = 85;
    if (score >= 70) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
    ```

15. **Loops:**
    - How do you create a simple loop in TypeScript?
    
    ```typescript
    for (let i = 1; i <= 5; i++) {
        console.log(`Iteration ${i}`);
    }
    ```
    And descending...

    ```typescript
    for (let i = 5; i >= 1; i--) {
        console.log(`Iteration ${i}`);
    }
    ```

Hope these help you to learn TypeScript.