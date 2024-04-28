import Product from "./models/product.model.js";
import Manager from "./Manager.Mongo.js";


const products = new Manager(Product)
export default products