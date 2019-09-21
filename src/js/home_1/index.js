import {wordsCount, getWords} from './stringUtils';

let test = '  1   23   yyyyy uuuu iiiiiiiiiii     ooooooooooo oooooooo ';

console.log(test);
console.log(wordsCount(test));

for (let word of getWords(test)) {
    console.log(word);
}