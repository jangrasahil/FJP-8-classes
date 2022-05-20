//fs module will help us in file handling

const fs =require('fs')
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

fs.writeFileSync('f3.txt', 'without having a file the file f3 is to be created')



//3. append (update a file)
fs.appendFileSync('f2.txt' , 'new content is updated via append')

// new content is added

//4. unlinksync method (this will delete a file)

//let say we have to delete f1 file

fs.unlinkSync('f1.txt')
console.log('file deleted')

//f1 file is deleted after using unlinksync


