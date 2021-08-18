let count = 0;
console.log(parseInt("count" + 1));

// 5 digit pin generator
function generatePin(){ return Math.floor(Math.random()*90000) + 10000; }