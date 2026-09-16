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


const updateuser = (req, res) => {

    const id = Number(req.params.id)

    let { name, age } = req.body

    


    let data = fs.readFileSync('./database/data.json', 'utf-8')

    data = JSON.parse(data)

    let index = data.findIndex((e)=>e.id == id)

    data.splice(index, 1, {name, age, id})


    // let user = data.find((element) => element.id === id)

    // let user = data.find((element)=>(
    //      element.id === id)
    //     )


    // user[index].name = name
    // console.log(user)


    // if (name) {

    //     user.name = name
    // }


    // if (age) {

    //     user.age = age
    // }

    fs.writeFileSync('./database/data.json', JSON.stringify(data, null, 3))

    res.status(200).json({
        message: 'data updated successfully...',
        data,
        success: true
    })



}



const deleteuser = (req, res) => {

    console.log('first')

    const id = Number(req.params.id)


    let data = fs.readFileSync('./database/data.json', 'utf-8')

    data = JSON.parse(data)

    let index = data.findIndex((element) => {
        return element.id === id
    })


    data.splice(index, 1)


    fs.writeFileSync('./database/data.json', JSON.stringify(data, null, 3))

    res.status(200).json({
        message: 'data deleted successfully...',
        success: true,
        data
    })




}


export { getuser, createuser, updateuser, deleteuser }


