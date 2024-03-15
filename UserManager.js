class UserManager{
    static #users = []

    create(data){
        const user = {
            id : UserManager.#users.length === 0 ? 1 : UserManager.#users[UserManager.#users.length -1].id + 1 ,
            foto : data.foto  ,
            email : data.password   ,
            password :data.password   ,
            role : 0  ,
        }
        UserManager.#users.push(user)
    }
    read(){
        return UserManager.#users
    }
}

const generadorDeUsuarios = new UserManager()

generadorDeUsuarios.create({
    foto : 'foto.png',
    email : 'jota@gmail.com',
    password : 'jota123'
}) //genera un nuevo usuario

generadorDeUsuarios.create({
    foto : 'foto.png',
    email : 'juliana@gmail.com',
    password : 'juliana23'
}) //genera un nuevo usuario


console.log(generadorDeUsuarios.read());