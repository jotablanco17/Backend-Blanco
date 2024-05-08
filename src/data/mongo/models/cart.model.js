import { Schema, Types, model } from "mongoose";

const collection = "carts";
const schema = new Schema(
    {
        user_id: { type : Types.ObjectId , ref : "users", index : true , required : true},
        product_id: { type: String, required: true },
        quantity: { type: Number, required: true },
        state: { type: String, enum: ['reserved', 'paid', 'delivered'], default: 'reserved' }
    },
    {
        timestamps: true,
    }
);

schema.pre("find", function() { this.populate("user_id", "password role -_id ")})         //primer param clave. segund q muestro y  q no
schema.pre("findOne", function() { this.populate("user_id", "email -_id ")})
const Cart = model(collection, schema);
export default Cart;