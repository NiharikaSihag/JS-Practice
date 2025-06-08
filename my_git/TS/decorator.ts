// function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor):void {
//     const originalMethod = descriptor.value; // Store original method
  
//     descriptor.value = function (...args: any[]) {
//       console.log(`Calling ${propertyKey} with args:`, args);
//       return originalMethod.apply(this, args);
//     };
//   }
  
//   class User {
//     name: string;
  
//     constructor(name: string) {
//       this.name = name;
//     }
  
//     @LogMethod
//     greet(message: string) {
//       console.log(`${this.name} says: ${message}`);
//     }
//   }
  
//   const user = new User("Alice");
//   user.greet("Hello!"); 
//   // Output:
//   // Calling greet with args: ["Hello!"]
//   // Alice says: Hello!



function OverrideMethod<T>(
    target: Object,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<T>
  ): void {
    if (!descriptor.value) {
      throw new Error("Descriptor value is undefined.");
    }
  
    const originalMethod = descriptor.value as Function;
  
    descriptor.value = function (this: any, ...args: any[]) { // Explicitly typing 'this'
      console.log(`🔹 ${propertyKey} method is being called with arguments:`, args);
      return originalMethod.apply(this, args); // Ensuring 'this' is preserved
    } as T;
  }
  
  class Example {
    @OverrideMethod
    sayHello(name: string) {
      console.log(`Hello, ${name}!`);
    }
  }
  
  const ex = new Example();
  ex.sayHello("Alice");
  