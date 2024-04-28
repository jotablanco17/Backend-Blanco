import { Schema, model } from "mongoose";

const collection = "products";
const schema = new Schema({
    title: { type: String, required: true }, 
    // por defecto los cambios no son obligatorios
    category: { type: String, default: "to do", enum: ["to do", "done"] } ,
    price : { type : Number, default: 200 ,},
    stock : { type : Number, default: 10},
    photo : { type : String, default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fbr%2Feditorial%2Fjohnnie-walker-whisky-bottle-82411650.html&psig=AOvVaw3fVgz51UwynEAxbD22CYi3&ust=1714083651244000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNCOt6vx24UDFQAAAAAdAAAAABAJ"}
}, {
    timestamps: true
});
const Product = model(collection, schema);

export default Product;
