//import is the keyword to get the exported value

//to import one value
import {name} from './export.mjs';

name('Yvi');

//to import more than one value
import {sum, sub} from './export.mjs';

console.log(sum(1,3));

console.log(sub(4,5));


//the import.meta sontains informations about the current module
console.log(import.meta);
