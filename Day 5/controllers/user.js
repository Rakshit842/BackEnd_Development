import fs from 'fs';

const getuser = (req, res) => {
    let data = fs.readFileSync('./database/data.json', 'utf-8');

    res.status(200).json({
        message: "User data fetched successfully",
        success: true,
        data
    })
}
 

const createuser = (req, res) => {
    let { name, age, id } = req.body;

    if (!name || !age || !id) {
        return res.status(400).json({
            message: "Please provide all the required fields",
            success: false
        })
    }

    let data = fs.readFileSync('./database/data.json', 'utf-8');
    data = JSON.parse(data);
    data.push({ name, age, id });

    fs.writeFileSync('./database/data.json', JSON.stringify(data));
    res.status(201).json({
        message: "User created successfully",
        success: true,
        data
    })
}
 



const updateuser = (req, res) => {

    console.log('object')
    const id = Number(req.params.id)
    let { name, age } = req.body

    

    let data = fs.readFileSync('./database/data.json', 'utf-8')

    data = JSON.parse(data)
    
     

     
    let user = data.find((e) => e.id === id)

    

    if (name) {
        user.name = name
    }
    if (age) {
        user.age = age
    }

    fs.writeFileSync('./database/data.json', JSON.stringify(data, null, 3))

    res.status(200).json({
        message: 'data update successful...',
        data,
        success: true
    })
}
 


const deleteuser = (req, res) => {
    console.log('first')

    let data = fs.readFileSync('./databse/data.json', 'utf-8')

    data = JSON.parse(data)

    let index = data.findIndex((element)=> {
        return element.id === id
    })
  
    data.splice(index, 1)

    fs.writeFileSync('./database/data.json', JSON.stringify(data, null, 3))

    req.status(200).json({
        message: 'data deleted successfully....',
        success : true,
        data
    })
}
export{deleteuser, getuser, updateuser, createuser}