const fs = require('fs');


//To Create File

// Synchronous file write
// fs.writeFileSync('./example.text', 'Hello world !');

// Asynchronous file write
// fs.writeFile('./example.text', 'Hello world  Async !', (err) => {
//     if (err) {
//         console.error('Error writing file:', err); 
//     } else {
//         console.log('File written successfully');
//     }  
// });



// To read File
// Synchronous file read 
//  const result = fs.readFileSync('./contacts.txt', 'utf-8');
//   console.log(result);

// //   Asynchronous File read
//   fs.readFile('./contacts.txt', 'utf-8',(err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(result);
//     }
//   })




// Append data to a file

// fs.appendFileSync('./contacts.txt',` ${new Date() }Hey There!\n`);


// Copy a file
// fs.copyFileSync('./contacts.txt','./backup-contacts.txt');
// fs.unlinkSync('./backup-contacts.txt');

//Status of a file
 const status = fs.statSync('./contacts.txt');
 console.log(status);