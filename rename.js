const fs=require('fs')
fs.rename('def.txt','demo1.txt',(err)=>{
    if(err)console.log(err);
    else console.log("renamed")
})
