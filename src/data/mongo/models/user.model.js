import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "users";
const schema = new Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    role: { type: Number, default: 0, index: true },
    age: { type: Number, default: 12 },
    photo: {
      type: String,
      default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ole.com.ar%2Ftema%2Flionel-messi.html&psig=AOvVaw1i4D1ZvtubRCqKxbK91_5h&ust=1714971767052000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjn9end9YUDFQAAAAAdAAAAABAK",
    },
  },
  {
    timestamps: true,
  }
);
schema.plugin(mongoosePaginate)
const User = model(collection, schema);
export default User;
