// import http from 'http'

// const server = http.createServer((req, res) => {

//     // if(req.url === '/' && req.method === 'GET'){
//     //     res.end('<h1>Welcome to Backend</h1>')



//     // }else if(req.url ==='/about' && req.method ==='GET'){


//     //     res.end(JSON.stringify({
//     //         message:'this is about page...',
//     //     }))


//     // }else if(req.url === '/contact'  && req.method ==='GET'){
//     //     res.end('<h1>This is Contact Page...</h1>')
//     // }else if(req.url === '/home' && req.method ==='GET'){
//     //     res.end('<h1>This is Home page</h1>')
//     // }else{
//     //     res.end('<h1>Not found .....</h1>')
//     // }


//     let body = ''

//     if (req.url === '/user' && req.method === 'POST') {
//         req.on('data', (chunk) => {
//             body = body + chunk
//         })


//         req.on('end', () => {
//             body = JSON.parse(body)

//             console.log(body)

//             res.writeHead(200, { 'content-type': 'application/json' })

//             res.end(JSON.stringify({
//                 message: 'data fetched succesfully...',
//                 data: body,
//                 success: true
//             }))
//         })
//     }



// })

// const port = 3000





// server.listen(port, () => {
//     console.log('server has created at port', port)
// })