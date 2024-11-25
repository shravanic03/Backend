const http = require('http')

const server= http.createServer((req,res)=>
{
    if(req.url==='/')
    {
        console.log('request sent')
        res.end('Hello World')
    }

})
server.listen(3000,()=>
{
    console.log('Listening to port 3000....')
})
