//with JS extension use the `type` defined on package.json

import "core-js/proposals/change-array-by-copy.js"; //need the file extension at the end

// # New Array Methods (immutability)

const numbers = [1, 2, 3];

const reversed = numbers.toReversed();
console.log({ reversed });

const spliced = numbers.toSpliced(1, 1, 4, 5);
console.log({ spliced });

// numbers[1] = 4 // muting original array
const withed = numbers.with(1, 4);
console.log({ withed });

console.log({ numbers });dddd
