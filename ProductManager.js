class ProductManager{
    static #product = []

    create(data){
        const product = {
            id : ProductManager.#product.length === 0 ? 1 : ProductManager.#product[ProductManager.#product.length -1].id + 1 ,
            photo : data.photo  ,
            title : data.title  ,
            category : data.category  ,
            price: data.price ,
            stock : data.stock
        }
        ProductManager.#product.push(product)
        console.log('producto creado');
    }
    read(){
        return ProductManager.#product
    }
}

const gestorDeProductos = new ProductManager()

gestorDeProductos.create({
    photo : 'zapatilla.jpg ' ,
    title : 'zapatilla ' ,
    category : 'calzado'  ,
    price: 100 ,
    stock : 1000
}) //genera un nuevo usuario

gestorDeProductos.create({
    photo : 'remera.jpg ' ,
    title : 'remera ' ,
    category : 'ropa'  ,
    price: 200,
    stock : 203
}) //genera un nuevo usuario

gestorDeProductos.create({
    photo : 'ojotas.jpg ' ,
    title : 'ojota ' ,
    category : 'calzado'  ,
    price: 50 ,
    stock : 605
}) //genera un nuevo usuario

gestorDeProductos.create({
    photo : 'pantalon.jpg ' ,
    title : 'pantalon ' ,
    category : 'pantalones'  ,
    price: 70 ,
    stock : 1500
}) //genera un nuevo usuario
gestorDeProductos.create({
    photo : 'gorra.jpg ' ,
    title : 'gorra' ,
    category : 'gorros'  ,
    price:20,
    stock : 150
}) //genera un nuevo usuario




console.log(gestorDeProductos.read());
