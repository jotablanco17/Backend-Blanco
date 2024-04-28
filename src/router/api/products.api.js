import { Router } from "express";
import isTitle from "../../middlewares/isTitle.mid.js";
import uploader from "../../middlewares/multer.mid.js";
import products from "../../data/mongo/ProductManager.Mongo.js.js";



const productsRouter = Router()
export default productsRouter

//read all
productsRouter.get("/", async (req,res,next)=>{
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
        return next(error)
        
    }
})



//readOne
productsRouter.get("/:pid", async(req, res, next)=>{
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
      return next(error)
    }
})

//post
const create = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(req.file);
    const one = await products.create(data);
    return res.json({
      statusCode: 201,
      message: "CREATED ID: " + one.id,
    });
  } catch (error) {
   return next(error)
  }
};
productsRouter.post("/",uploader.single('photo'),isTitle, create);


//put
const update = async (req, res, next) => {
try {
  const { pid } = req.params
  const data = req.body
  const one = await products.update(pid,data)
  return res.json({
    statusCode: 200,
    response: one
  })
} catch (error) {
  return next(error)
}
};
productsRouter.put("/:pid", update);



//delete
const destroy = async(req,res,next)=>{
  try {
    const { pid } = req.params
    const one = await products.destroy(pid)
    if (!one) {
        const error = new Error('error!')
        error.status = 404
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
productsRouter.delete("/:pid", destroy)
