import express from "express"
const server = express()

const path = 8080
const ready = () => console.log(`server ready in ${path}`)
server.listen(path, ready)



server.use(express.urlencoded({extended : true}))  


import users from './data/fs/UsersManager.js'



//read all
server.get("/api/users", async (req, res)=> {
    try {
        const { role } = req.query
        let all = await  users.read(role)
        if (all) {
            return res.status(200).json({
                response : all,
                role
            }, null, 2)
        }else{
            const error = new Error ('error no se encontraron')
            error.status = 404
            throw error
        }
    } catch (error) {
        console.log(error);
        return res.status(error.status).json({
            response : error.message
        })
    }
})



//readOne
server.get("/api/users/:uid",async (req, res)=>{
    try {
         const { uid } = req.params
         const one = await users.readOne(uid)

         if (one) {
               return res.status(200).json({
            response : one,
            success : true
        })
         }else{
            const error = new Error('dont find id :  ERROR')
            error.status = 404
            throw error
         }
      
    } catch (error) {
        console.log(error);
        return res.status(error.status).json({
            response : error.message,
            success : false
        })
    }
})






