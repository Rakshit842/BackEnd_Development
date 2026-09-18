import express from 'express'

const app = express()
const port = 3000

app.get('/user', (req,res)=>{

    console.log(req.url)

    console.log(req.method)

    console.log(req.body)

    console.log(req.params)

    console.log(req.headers)
    
    console.log(req.query)
    
    res.json({
        message: 'this is user api calling.....'
    })
})


app.listen(port, ()=>{
    console.log('server has started at port: ', port)
})

