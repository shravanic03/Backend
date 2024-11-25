const http = require('http')

const server= http.createServer((req, res)=>
{
    if(req.url==='/')
    {
        res.end('Home page')

    }
    else if(req.url==='/about')

    {
        for(let i =0; i<1000;i++)
        {
            for(let j =0; j<1000;j++)
            
        {
            console.log(i,j)

        }
        }
        res.end('About Page')
    }
    else{
        res.end('Error')
    }

})
server.listen(3000,()=>
{
    console.log('Listening to port 3000....')
})
