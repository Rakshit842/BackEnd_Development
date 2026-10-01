import express from "express";
const app = express()

const port = 3000

import morgan from "morgan";

app.use(morgan('dev'))

app.use(express.static('public'))

// app.use(express.static('public'))

// app.use(express.json())


// app.use(express.urlencoded({
//     extended:true
// }))



function middleware1(req, res, next) {
    console.log('this is middleware first')

    next()

}


function loggerMiddleware(req, res, next) {
    console.log(req.method)
    console.log(req.url)

    next()
}

// app.use(middleware1)

app.post('/user', loggerMiddleware, middleware1, (req, res) => {

    console.log('this is main logic....')

    // console.log(req.body)

    res.send('response sent')
})


app.post('/about', (req, res) => {

    console.log('this is about logic')
})


app.listen(port, () => {
    console.log('server has started at port : ', port)
})