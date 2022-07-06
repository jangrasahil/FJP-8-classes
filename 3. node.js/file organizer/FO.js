
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

                                             // object and extension of file ,folder 
  let types = {media: ["mp4", "mkv", "mp3"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: ["docx","doc","pdf","xlsx","xls","odt","ods","odp","odg","odf","txt","ps","tex",],
  app: ["exe", "dmg", "pkg", "deb"],};

      //all these are the extension of file and folders


const fs =require('fs')
const path=require('path')
 let inputArr=process.argv.slice(2)            //slice is used because folder or file path is requirred
 //console.log(inputArr)  

 let command=inputArr[0];

 switch(command)
 {
     case "tree":
     console.log("the tree command will be executed")
 break;
 case "organize":
     organizeFN(inputArr[1])                                           //call of organize 
                                                            //console.log('the organize command will be executed')   
                                                           //comment out command line
 break;
case "help":
 console.log(`list of all commands 
                                 1)  Tree command - node FO.js tree <dirPath>
                                 2)  Organize command - node FO.js organize <dirname>
                                 3)  Help command - node FO.js help` );
 break;                           //let all these command as module

 default:
     console.log("enter a valid command");
     break;
 }


                                       //organize command implement
 function organizeFN(dirpath){
     let destpath;
     if(dirpath==undefined){
     console.log("please enter a valid directory path");
         //check weather folder path exist or not
     return;
 }
     else {
         let doesExist=fs.existsSync(dirpath);
            //here we are check9ing folder path exist or not
         if(doesExist==true){
             destpath=path.join(dirpath, "organizedfiles");
         }
         if(fs.existsSync(destpath)==false){
             fs.mkdirSync(destpath)      //we will create a new folder if it does not exist
         }
         else{'folder alredy exists'}
     
        }
        
        organizeHelper(dirpath)   
    }
   function organizeHelper(src , dest)
   {
       let childNames=fs.readdirSync(src)
       console.log(childNames)

       for (let i=0 ; i<=childNames.length;i++)
       {
           childAddress= path.join(src,childNames[i])  //path is identified for all childs
           let checkForFile= fs.statSync(childAddress).isFile()
           //console.log(childAddress+ "" +checkForFile)
           if(checkForFile==true){
            let filecategory= getcategory(childNames[i]);
            console.log(childNames[i] + "belongs to" + filecategory)
            sendFiles(childAddress , dest, filecategory)
           }
       }
   }

//from  below it is conclude that which file folder belongs to which category

function getcategory(filename) {
    let ext= path.extname(filename)
    console.log(ext)
    ext=ext.slice(1)    // it willslice from 1 therefore it will consider and ignore 0 position
    console.log(ext)

}   


// FOR IN LOOP

  //here after in types is a object   and let type is above define types that is media archive etc.


for(let type in types)  {
    let ctypeArr= types[type]
    for(let i=0 ; i<ctypeArr.length ; i++)
    if(ext=== ctypeArr[i]) {

    return type;
    }
    return "others";
    
}   
function sendFiles( srcFilepath , dest , filecategory){
    let catPath=path.join(dest , filecategory)  // here we aare making categorypath to create folders
    if (fs.existsSync(catPath)==false){
        fs.mkdirSync(catPath)
    }
    let filename= path.basename(srcFilepath)   //here we took out the name of file
let destpath= path.join(catPath, filename)

fs.copyFileSync(srcFilepath , destpath)
fs.unlink(srcFilepath)
console.log(filename + 'copied to ' +  filecategory)
}