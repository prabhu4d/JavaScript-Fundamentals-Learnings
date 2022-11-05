// sum(1)(2)(3)(4)()

// let sum = a => b => b ? sum(a + b) : a;

function sum(a) {
  return function (b) {
    return b ? sum(a + b) : a;
  }
}

console.log(sum(1)(2)(3)(4)())

