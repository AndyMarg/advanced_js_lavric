// import EmailParser from './email-parser';

// let parser = new EmailParser('AndyMarg.Bay@marg.ntschool.ru');
// console.log(parser.email);
// console.log(parser.isCorrect);
// console.log(parser.name);
// console.log(parser.domain);

import watcher from './watcher';

let div = document.createElement('div');
document.body.appendChild(div);
 
let smartElem = watcher(div, function(prop, val) {
    console.log(prop, ' = ', val);
});

smartElem.innerHTML = '<strong>HTML</strong><em>Changed</em>';
smartElem.style.color = 'red';
smartElem.querySelector('em').style.color = 'green';