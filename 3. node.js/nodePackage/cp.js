//child process is a module (1st module in class of node.js)
//MODULE CHILD PROCESS

//child process is a node module used to create sub processwithin a script
//you can perform different task with your own script

//const cp= require('child_process')
//console.log('open calculator')
//cp.execSync('calc')    //this command will open calculator

//let say we have to open a browser and a page (we give link of the page)
 const cp=require('child_process')
 console.log('open browser')
 cp.execSync('start chrome https://mscshipmanagement.com/crewing-services/msccs-india/msccs-india-apply-for-gme')

 //this link will open the chrome browser and i give the link of msc gme link. 
 //therefore it will open msc gme page in the chrome

 //if we want to give output in the file test.js in that case we will do

 console.log(' output ' +cp.execSync('node test.js'))



