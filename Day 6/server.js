import express from 'express'
const app = express()

app.use(express.json())

const port  = 3000

app.post('/user/:id', (req,res)=>{
    // console.log(req)

    console.log(req.url)

    console.log(req.method)

    console.log(req.body)

    console.log(req.params)

    console.log(req.headers)

    // console.log(req.headers.host)

    console.log(req.query)

    // res.json({
    //     message:'this is user api calling....'
    // })

    res.status(201).send('this is backend')
})


app.listen(port , ()=>{
    console.log('server has started at port : ', port)
})


