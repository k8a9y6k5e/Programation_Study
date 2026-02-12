//way to import values while the code run

const sumPath = './export.mjs'

let {sum} = await import(sumPath);

console.log(sum(1,2));