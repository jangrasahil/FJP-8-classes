var a=2;

console.log(a)

var a="pepcoding"

console.log(a)

var a="my name is sahil"

console.log(a)

//redeclare means a ki value ko bar bar declare kiya
//reassign means a ki value ko frse assign kiya

// var keyword's problem it can be redeclared (a ki value bar bar alg alg di )

//soluton--by using let we can solve this problem. (let is another keyword like var) 

//var can be reassigned//

//var is function scoped and let is block scoped//

a='pepcoding'
console.log(a)


function test {
    var a=2
 console.log(a)
}
test()
console.log(a) //this is not allowed

if(true){
    var b=4
    console.log(b)
}
console.log(b)  //downside of using var

//solution --use Let to avoid
 if (true)
 {
     let c=4
     console.log(c)
 }  //let is block scope
 console.log(c)

//const keyword no redeclare, no reassign

const a=2
console.log(a)

const a=4
console.log(a)  //no redeclare

const a='pepcoding'
console.log(a)  // no reassign

