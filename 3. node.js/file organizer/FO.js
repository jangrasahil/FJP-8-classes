
                                                     //PROJECT NUMBER 2//

//we will be creating a file system organizer//
//feature of project//
//if  you have numerous file in a filder and they are not properly arranged//
//so you can use this tool to arrangethem in specific directory according to their extension//
//like text file will go into text file folder  .exe file will go into application folder and so on//
//so at the endyou have a arranged set of files ina specific folder//  

//let input=process.argv[2]  //this line will give 2nd word from command line
//console.log(input)

//let firstnumber=process.argv[2]
//let secondnumber=process.argv[3]
//console.log(Number(firstnumber) +Number(secondnumber))  // affter this both number were added


                           //project start//
                           //1st command   1 organize   2 help      3 tree

                                 //START OF PROJECT//


                        
 let inputARR=process.argv.slice(2)            //slice is used because folder or file path is requirred
 //console.log(inputARR)  

 let command=inputARR[0];

 switch(command)
 {
     case "tree":
     console.log("the tree command will be executed")
 break;
 case "organize":
 console.log('the organize command will be executed')
 break;
case "help":
 console.log(`list of all commands 
                                 1)  Tree command - node FO.js tree <dirPath>
                                 2)  Organize command - node FO.js organize <dirname>
                                 3)  Help command - node FO.js help` );
 break;

 default:
     console.log("enter a valid number")
     break;
 }