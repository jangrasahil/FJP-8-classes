const path=require('path')

let basename=path.basename('D:\\fjp-8\\3. node.js\\nodePackage\\f3.txt')
console.log('basename->' + basename)

let ext=path.extname('D:\\fjp-8\\3. node.js\\nodePackage\\f3.txt')
console.log(ext)

console.log(__dirname)  // it will inform us about the directory or path name
console.log(__filename)