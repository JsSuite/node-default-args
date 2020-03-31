const defaultArguments = require("./default.arguments");

function exampleAssert() {
  function add(a, b) {
    return a + b;
  };

  const add2 = defaultArguments(add, { b: 9 });
  console.assert(add2(10) === 19);
  console.assert(add2(10, 7) === 17);
  console.assert(isNaN(add2()));
  const add3 = defaultArguments(add2, { b: 3, a: 2 });
  console.assert(add3(10) === 13);
  console.assert(add3() === 5);
  console.assert(add3(undefined, 10) === 12);
  const add4 = defaultArguments(add, { c: 3 });
  console.assert(isNaN(add4(10)));
  console.assert(add4(10, 10) === 20);
}

function exampleAssertWithArrow() {
  const addArrow = (a, b) => {
    return a + b;
  }
  const add2 = defaultArguments(addArrow, { b: 9 });
  console.assert(add2(10) === 19);
  console.assert(add2(10, 7) === 17);
  console.assert(isNaN(add2()));
  const add3 = defaultArguments(add2, { b: 3, a: 2 });
  console.assert(add3(10) === 13);
  console.assert(add3() === 5);
  console.assert(add3(undefined, 10) === 12);
  const add4 = defaultArguments(addArrow, { c: 3 });
  console.assert(isNaN(add4(10)));
  console.assert(add4(10, 10) === 20);
}

exampleAssert();
exampleAssertWithArrow();