import express from "express"
const server = express()

const path = 8080
const ready = () => console.log(`server ready in ${path}`)
server.listen(path, ready)



server.use(express.urlencoded({extended : true}))  



//----------------////------------users ------------------////

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


//----------------////------------products ------------------////

import products from './data/fs/ProductManager.js'



//read all || categ
server.get("/api/products", async (req,res)=>{
    try {
        const { category } = req.query
        const all = await products.read(category)
        if (all) {
            return res.status(200).json({
                response : all,
                category
            })
        }else{
            const error = new Error('ERROR')
            throw error
        }
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            response : error.message
        })
    }
})



//readOne
server.get("/api/products/:pid", async(req, res)=>{
    try {
        const { pid } = req.params
        const one = await products.readOne(pid)

        if (!one) {
            const error = new Error('dont find id : ERROR')
            throw error
        }else{
            return res.status(201).json({
                response : one,
            })
        }
    } catch (error) {
        return res.status(404).json({
            response : error.message,
        })
    }
})