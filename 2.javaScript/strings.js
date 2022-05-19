// string is sequence of characters
//1st property of string
//length e can find length of any string

let str= 'pepcoding'

console.log(str.length)

// after this we know length is 9 of pepcoding//

//method in string
 
let slicedStr = str.slice(3,6)
console.log(slicedStr)

//2.  substr it is 2nd method

//subStr(startIdx , length)
let subString= str.substr(3,4)
console.log(subString)

//3.  METHOD replace method
//it is used to replace value
//format --replace(valuetobereplace ,value to be replaced with)

let sayHello= 'Hello sahil'
console.log(sayHello)

let sayBye =sayHello.replace('Hello' , 'Bye')
console.log(sayBye)

//4. method TOuppercase  ,,TOlowercase
let text1='hello'
let text2=text1.toUpperCase()
console.log(text2)

let text3='SAHIL'
let text4=text3.toLowerCase()
console.log(text4)

// 5. method CONCATENATION METHOD to attach 1 string to other

let firststring='sahil'
let secondstring='jangra'
let concatenatedStr=firststring.concat(secondstring)
console.log(concatenatedStr)

//6.  trim method it is used to remove wide space 

//let text= '       hello world'
//console.log(text)

//now after use trim

let text= '       hello world'
console.log(text)
let trimmedText=text.trim()
console.log(trimmedText)
