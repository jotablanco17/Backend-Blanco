import users from "../data/mongo/UsersManager.Mongo.js";
import products from "../data/mongo/ProductManager.Mongo.js.js";
import socketServer from "../../server.js";

let messages = []

export default async (socket) => {
   

    //users
    socket.emit('users', await users.read())
    socket.on('register',async data =>{
        await users.create(data)
        socket.emit('users', await users.read())
    })

    //products
    socket.emit('products',await products.read() )
    socket.on('registerProd',async data => {
        await products.create(data)
        socket.emit('products',await products.read() )
    } )

    //chat
    socket.on("user", async (user) => {
      messages.push(
        `<p class="py-1"><span class="fw-bolder text-${user.color}">${user.nickname}</span> is online</p>`
      );
      socketServer.emit("messages", messages);
    });
    socket.on("all messages", (allMessages) => {
      messages = allMessages;
      socketServer.emit("messages", messages);
    });
};

