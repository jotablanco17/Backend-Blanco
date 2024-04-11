import users from "../data/fs/UsersManager.js";
import products from "../data/fs/ProductManager.js";

export default async (socket) => {
    console.log("client id: " + socket.id)
    socket.emit('users', await users.read())
    socket.on('register',async data =>{
        await users.create(data)
        socket.emit('users', await users.read())
    })
    socket.emit('products',await products.read() )
    socket.on('registerProd',async data => {
        await products.create(data)
        socket.emit('products',await products.read() )
    } )

};

