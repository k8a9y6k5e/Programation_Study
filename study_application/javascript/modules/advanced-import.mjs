//can import all values from a other as an object

import * as calc from './advanced-export.js';

console.log(calc.division(5,10));

//can import the values with a diverent name

import {dobleCalculation as doble} from './advanced-export.js';

console.log(doble(4));


import {triple} from './advanced-export.js';

console.log(triple(2));

//with the default in export, we can import a only value

import Car from './advanced-export.js';

console.log(new Car('porsche', '911'));

