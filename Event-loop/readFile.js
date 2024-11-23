const fs = require('fs');
console.log("Start");
fs.readFile("./content/first.txt","utf8",(err,result)=>
{
    if(err)
    {
        console.log(err)
        return;
    }
    console.log(result)
    console.log("Done reading the file")
})
console.log("Moving on to next task ")
