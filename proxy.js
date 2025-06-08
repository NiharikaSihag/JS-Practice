// Definition: Wrapper around real object
const person = {
    name: 'John',
    age: 30
  };
  
  const proxy = new Proxy(person, {
    get(target, prop) {
      if (prop === 'age') {
        return `${target[prop]} years old`;
      }
      return target[prop];
    }
  });
  
  console.log(proxy.age); // 30 years old
  