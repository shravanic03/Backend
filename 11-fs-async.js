const {readFile,writeFile}= require('fs')
console.log("start")
readFile('./content/first.txt', 'utf8',(err,result)=>
{
    if(err)
    {
        console.log(err)
        return;

    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>
    {
        if(err)
    {
        console.log(err)
        return;

    }
    const second = result;
    writeFile('./content/record2.txt','Hello this is record2',(err,result)=>
    {
        if(err)
        {
            console.log(err)
            return;
    
        }
       console.log(result);
       console.log("Done with task")
    })
    })
})
console.log("Starting with next one")
