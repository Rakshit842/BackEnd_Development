db.users.insertMany([
   {
        name: 'Ankit',
        age:17,
        gender:'male',
        cgpa:6.5,
        course:'BTech'
    },
    {
        name: 'Jigar',
        age:18,
        gender:'male',
        cgpa:9.5,
        course:'BTech'
    },
    {
        name: 'Rahul',
        age:25,
        gender:'male',
        cgpa:10,
        course:'MCA'
    },
    {
        name: 'Payal',
        age:29,
        gender:'female',
        cgpa:9.5,
        course:'BCA'
    },
    {
        name: 'Swati',
        age:26,
        gender:'female',
        cgpa:5.5,
        course:'BCA'
    },
    {
        name: 'Nandan',
        age:37,
        gender:'male',
        cgpa:9.5,
        course:'BTech'
    }
])


// db.users.aggregate([
//     {
//         $match : {
//             gender : 'female'
//         }
//     }
// ])

db.users.aggregate([
    {
        $match : {
            cgpa : {
                $gte : 9
            }
        }
    }
])

db.users.aggregate([
    {
        $project : {
            name: 1,
            gender: 1,
            _id: 0
        }
    }
])

db.users.aggregate([
    {
        $match: {
            course: "Btech"
        }
    },

    {
        $project: {
            name: 1,
            marks: 1,
            _id: 0
        }
    },

    // {
    //     $limit : 1
    // }

    {
        $sort: {
            cgpa: -1
        }
    }
])

db.users.createIndex({
    name: 1
})