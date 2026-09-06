// const sum = require('./math')

// import {sum, divide} from './math.js'

// console.log(sum(50, 20))

// console.log(divide(20,5))


import os from 'os'


// if(os.platform()==='win32'){
//     console.log('this is window')



// }else{
//     console.log('this is not window')
// }


// console.log(os.type())

// console.log(os.arch())

// console.log(os.cpus())


// console.log(os.totalmem() / 1024 / 1024 / 1024)

// console.log(os.hostname())

// console.log(os.uptime() / 60 / 60)



import path from 'path'

// console.log(path.basename('./parent/child.js'))

// console.log(path.extname('./parent/child.js'))

// console.log(path.dirname('./parent/child.js'))

// let newPath = path.join('parent', 'child.js')

// console.log(newPath)

// console.log(path.sep)

// console.log(path.resolve())


import fs from 'fs'

// fs.mkdir('./parent/child/', (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
// })

// fs.writeFile('./parent/child.js', "console.log('hello world')", (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
// })


// fs.readFile('./parent/child.js', 'utf-8', (err, data)=>{
//     if(err){
//         console.log(err)
//     }
    
//     console.log(data)
// })




// fs.writeFile('./parent/child/index.html', '<h1>Hello Node js </h1>', (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
// })

// fs.readFile('./parent/child/index.html', 'utf-8' ,(err, data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data)
// })


// fs.appendFile('./parent/child/index.html', '\n <b>this is bold tag</b>', (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }

// })

// fs.cp('./server.js', './parent/child/index.html', (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
// })


// fs.unlink('./parent/child/index.html', (err)=>{
//     if(err){
//         console.log(err)
//         return

//     }
// })


import dns from 'dns'

// dns.lookup('facebook.com', (err, address)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(address)
// })

// dns.reverse('163.70.146.35', (err, domain)=>{
//     if(err){
//         console.log(err.message)
//         return
//     }

//     console.log(domain)
// })




import crypto from 'crypto'

// let password = '123456'

// let hashpassword = crypto.createHash('sha256').update(password).digest('Hex')

// console.log(hashpassword)

// console.log(crypto.randomUUID())