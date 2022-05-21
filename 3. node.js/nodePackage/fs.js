//fs module will help us in file handling

//about  filessss 

const fs =require('fs')
const path=require('path')
// 1. we will learn how to read a file

//let content=fs.readFileSync('f1.txt')
//console.log('i am file 1 data => ' + content)  //to remove buffer we use another string

//also to remove buffer we use tostring //

//console.log(content.toString()) 



//2. writing into a file
//writefileSync

fs.writeFileSync('f2.txt' , 'this data is to be wriiten via writefilesync method' )

//after using this the above lineis to be writen in f2.txt file

//agar koi filecreate nhi  h or hum file ko declare krke text daal dete to  file khud create ho jaigi
//e.g f3 file nhi h ab agr writefilesync krke text dege to self create hogi

//fs.writeFileSync('f3.txt', 'without having a file the file f3 is to be created')



//3. append (update a file)
//fs.appendFileSync('f2.txt' , 'new content is updated via append')

// new content is added

//4. unlinksync method (this will delete a file)

//let say we have to delete f1 file

//fs.unlinkSync('f1.txt')
//console.log('file deleted')

//f1 file is deleted after using unlinksync


//directories

//creation of directory
 //1 method

 //mkdirsync method

// fs.mkdirSync('my directory')

 //after this my directory is created

// console.log('directory created')


 // to delete a directory
 //2. rmdirsync (it will delete a diretory)

 //fs.rmdirSync('my directory')


 // my directory is deleted


 //3. to check weather a file exist or not
 //existsSync

 //let doesExist =fs.existsSync('my folder')
 //console.log(doesExist)

 //thus it is clear that my folder does not exist (it will give output in true and false)//


//to check content of any folder we use readdirSync method
  
 
 //3. readdirSync method

//let folderContent = fs.readdirSync('my directory 2')
//console.log(folderContent)


//thus here all the file inside my directory 2 (txt1,2,3) are displayed

//if we want informatiion of folder that is outside fs.js or node.js folder 
//than we have to find that folder path
// eg. lets find javaScript content

//let folderContent = fs.readdirSync('D:\\fjp-8\\2.javaScript')  //use double(//) in place of single (/)
//console.log(folderContent)

//thus here content of javascript is considered

//to copy a file and send it from 1 folder to other folder

//let srcfilepath= 'D:\\fjp-8\\3. node.js\\nodePackage\\my directory 2\\f2.txt '
//let destinationFolderpath = 'D:\\fjp-8\\2.javaScript'

///let tobecopiedfilebasename=path.basename('srcfilepath')
//console.log(tobecopiedfilebasename)
//let destpathcomplete=path.join(destinationFolderpath,tobecopiedfilebasename)
//console.log(destpathcomplete)
//fs.copyFileSync=(srcfilepath , destpathcomplete)
//console.log('file copied')
//fs.unlinkSync(srcfilepath)