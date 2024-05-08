import { Router } from "express";
import cartsManager from "../../data/mongo/CartsManager.js";


const cartsRouter = Router()
export default cartsRouter

//read all
cartsRouter.get("/", async (req, res, next)=> {
    try {
        const { user } = req.query
        let all = await  cartsManager.read(user)
        if (all) {
            return res.status(200).json({
                response : all,
                user
            }, null, 2)
        }else{
            const error = new Error ('error no se encontraron')
            error.status = 404
            throw error
        }
    } catch (error) {
        console.log(error);
        return next(error)
    }
})

cartsRouter.get("/", async (req, res, next)=> {
  try {
      const filter = {}
      if (req.query.user_id) {
        filter.user_id = req.query.user_id
      }
      let all = await  cartsManager.read({ filter })
      if (all) {
          return res.status(200).json({
              response : all,
              user
          }, null, 2)
      }else{
          const error = new Error ('error no se encontraron')
          error.status = 404
          throw error
      }
  } catch (error) {
      console.log(error);
      return next(error)
  }
})

//readOne
cartsRouter.get("/:cid",async (req, res, next)=>{
    try {
         const { cid } = req.params
         const one = await cartsManager.readOne(cid)

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
        return next(error)
    }
})
//post
const create = async (req, res, next) => {
    try {
      const data = req.body;
      const one = await cartsManager.create(data);
      return res.json({
        statusCode: 201,
        message: "CREATED ID: " + one.id,
      });
    } catch (error) {
      return next(error)
    }
  };
cartsRouter.post("/create",create);
//put
const update = async (req, res, next) => {
  try {
    const { uid } = req.params
    const data = req.body
    const one = await cartsManager.update(uid,data)
    return res.json({
      statusCode: 200,
      response: one
    })
  } catch (error) {
    return next(error)
  }
};
cartsRouter.put("/:uid", update);
//delete
const destroy = async(req,res, next)=>{
    try {
      const { uid } = req.params
      const one = await cartsManager.destroy(uid)
      if (!one) {
        const error = new Error('not found')
        throw error
      }else{
        return res.json({
        statusCode: 200,
        response: one
      })
      }
      
    } catch (error) {
      return next(error)
    }
  }
cartsRouter.delete("/:uid", destroy)