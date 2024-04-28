import User from "./models/user.model.js";
import Manager from "./Manager.Mongo.js";



const users = new Manager(User)
export default users