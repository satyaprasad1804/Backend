const os=require('os');
const fs=require('fs');

// fs.writeFile('myfile',"sampeele text",(err)=>{
//     if(err){
//         console.log("error while creating");
//         return;
//     }
//     console.log("file created and writed")
// })
// console.log(os.hostname());

fs.readFile('myfile','utf-8',(err,data)=>{
    if(err){
        console.log("error while read");
        return;
    }
    console.log(data);
})