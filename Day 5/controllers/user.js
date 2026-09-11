import fs from 'fs'

const getuser = (req, res) => {
    let data = fs.readFileSync('./database/data.json', 'utf-8')

    data = JSON.parse(data)

    res.status(200).json({
        message: 'data fetched successfully..',
        success: true,
        data

    })
}



const createuser = (req, res) => {
    console.log('first')

    let { name, age, id } = req.body

     

    // let name = req.body.name
    // let age = req.body.age
    // let id = req.body.id

    if (!name || !age || !id) {
        return res.status(404).json({
            message: "data has not found",
            success: false
        })
    }
    let data = fs.readFileSync('./database/data.json', 'utf-8')

    data = JSON.parse(data)

    data.push({ name, age, id })

    fs.writeFileSync('./database/data.json', JSON.stringify(data, null, 3))

    res.status(200).json({
        message: 'data created successfully...',
        success: true,
        data
    })
}


const updateuser = (req,res)=>{

     

    const id = Number(req.params.id)
    
    let {name, age} = req.body

  
    let   data = fs.readFileSync('./database/data.json', 'utf-8')
    
    data = JSON.parse(data)
    
     
    // let index = data.findIndex((e)=>e.id == id)

    let user = data.find((e)=>e.id === id)

    console.log(user)



    user.name = name

    user.age = age
 
   


}

 

export { getuser , createuser }


