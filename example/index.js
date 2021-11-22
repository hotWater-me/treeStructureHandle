const RecursionHalle = require('../src/main');

const RecursionHalles = new RecursionHalle();

const a =  [{ a: '6' }, { b: '7' }];
const a_1 = [{ b: '6' }, { d: '9' }]

const b = ['1', '2', 3];
const b_1 = ['4', '9', 3, '2']; 

const c = ['12', '89', { name: 'tom' }];

const data = {
    array_1: b,
    array_2: b_1
}

console.log(RecursionHalles.interDiff(data, 'diff'), 'RecursionHalles');



// var fs = require('fs');
// var data = fs.readFileSync('./src/main.js', 'utf8');
// console.log(data);
