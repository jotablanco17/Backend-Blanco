import mongoose from 'mongoose';
const database = mongoose.connection;

mongoose.connect('mongodb+srv://jota:jota2310@coderjota.glixstc.mongodb.net/coderjota', { useNewUrlParser: true, useUnifiedTopology: true });

import Manager from "./Manager.Mongo.js";
import Cart from "./models/cart.model.js";

const cartsManager = new Manager(Cart, database)
export default cartsManager

async function test() {
    try {
        await cartsManager.create({
            user_id: '66298a1fa8836ad2046ed63e',
            product_id: 2,
            quantity: 2,
        })
    } catch (error) {
        console.log(error);
    }
}
test()