
import express from "express";

const app =  express()


app.use(express.json())

app.get('/' , (req,res)=>{
    res.send('<h1>welcome to express backend </h1>')
})

app.get('/about', (req,res)=>{
    // res.send('<h1>this is about page</h1>')


    res.json({
        message:'this is about page ....'
    })
})


let users = ['rahul', 'jigar', 'manshi', 'ankit']

 

app.get('/user', (req,res)=>{

    res.status(200).json({
        message:'data fetched successfully...',
        success:true,
        users
    })
})

app.post('/createuser' , (req,res)=>{
    let name = req.body.name 
    
    if(!name){
       return  res.status(404).json({
            success:false,
            message:'data has not found....'
        })
    }

    users.push(name)

    res.status(200).json({
        message:'data created successfully...',
        success:true,
        users
    })

})


app.put('/updateuser', (req,res)=>{
    let name = req.body.name
    let newname = req.body.newname
    let index = users.indexOf(name)
    users[index] = newname
    res.status(200).json({
        message:"users updated successfully....",
        users,
        success:true
    })
})


app.delete('/deleteuser', (req,res)=>{

    let name = req.body.name
    let index = users.indexOf(name)
    users.splice(index, 1)
    res.status(200).json({
        message:'data deleted successfully..',
        users,
        success:true
    })
})
  

app.listen(3000, ()=>{
    console.log('server has running on port 3000')
})

