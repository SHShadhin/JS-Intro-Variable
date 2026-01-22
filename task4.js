// Task-4
// What will be the result of the following codes:

// var a = isNaN(‘11’);

// var a = isNaN(2-10);

// Explain your answers.


var a = isNaN('11')
console.log(a)
// answer is false. karon js '11' ke ekta number hisebei count kore. 
// isNaN = is not a number 
// so '11' jodi number hoy tahole ans false r number na hoy tahole ans true;




var b = isNaN(2-10);
console.log(b)

// jehetu 2-10 = -8 ekti number tai ans asbe false. jodi number na hoto taile true asto.

// let's see 

var c = isNaN('Shadhin')
console.log(c)

//jehetu 'shadhin' ekti number na. tai ans will be true.