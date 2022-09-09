function* generateSequence() {
    yield 1;
    yield 2;
    // return 3; // not part of for of loop
    yield 3;
}


let sequence = [0, ...generateSequence()];
console.log(sequence);
let generator = generateSequence();
for(let value of generator) {console.log(value)}
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())

// Iterators
let range = {
    from: 1,
    to: 5,
  
    *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
      for(let value = this.from; value <= this.to; value++) {
        yield value;
      }
    }
  };

console.log([...range]) // 1,2,3,4,5 


// Nested Generators
function* generateSequence2(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

  // 0..9
  yield* generateSequence2(48, 57);

  // A..Z
  yield* generateSequence2(65, 90);

  // a..z
  yield* generateSequence2(97, 122);

}

let str = '';

for(let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

console.log(str); // 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz

// Yield 2 way Street

function* gen() {
  let result = yield('2+2=?');

  yield result;

  let result2 = yield('2-2=?');

  yield result2;

}

let genr = gen();

let question = genr.next().value;
console.log(question); // 2+2=
let answer = genr.next(4);
console.log(answer.value); // 4

let question2 = genr.next().value;
console.log(question2); // 2-2=
let answer2 = genr.next(0);
console.log(answer2.value); // 0

// generate random Generator -Exercise question

function* pseudoRandom(initialValue) {
  let val = initialValue
  while(1) {
    val = val * 16807 & 2147483647
    yield val;
  }
}

let genret = pseudoRandom(1);
console.log(genret.next().value);
console.log(genret.next().value);
console.log(genret.next().value);