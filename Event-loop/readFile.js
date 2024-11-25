const {readFile, writeFile}= require('fs')
console.log('Starting task')

readFile('./content/first.txt','utf-8',(err, result)=>
{
    if(err)
    {
        console.log(err)

    }
    else{
        console.log(result)
        console.log('Completed task')
    }
})
console.log('Starting with new one ')

