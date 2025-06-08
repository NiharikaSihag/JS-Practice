// function identity<T>(arg: T): T {
//     return arg;
//   }
  
//   const numberResult = identity<number>(42);
//   const stringResult = identity<string>("Hello");
//   console.log(numberResult, stringResult);


function general<T>(args:T): T{
    return args;
}

console.log(general<number>(43));
console.log(general<string>('Hi'));