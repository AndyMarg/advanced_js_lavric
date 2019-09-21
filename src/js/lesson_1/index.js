// import Timer from './timer';

// window.addEventListener('load', function(){

//     let timer1 = new Timer(document.querySelector('.timer1'), 10);
//     console.log(timer1);

// });

// **************************************************
// import IterateObj from './iterateObj';

// let iter = new IterateObj(7, 14);

// for(let val of iter) {
//     console.log(val);
// }

// **************************************************
// import gen from './gen';

// for (let n of gen(4,11)) {
//     console.log(n);
// }

// **************************************************
import parser from './intParser';

for (let p of parser(5436789)) {
    console.log(p);
}

