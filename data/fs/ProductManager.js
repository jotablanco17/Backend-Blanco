import fs  from 'fs'
import crypto from 'crypto'

class ProductManager {
    constructor() {
        this.path = './data/fs/files/products.json'
        this.init()
    }

    init() {
        const exist = fs.existsSync(this.path)
        if (!exist) {
            const stringData = JSON.stringify([], null, 2)
            fs.writeFileSync(this.path, stringData)
            console.log('archivo creado');
        } else {
            console.log('archivo ya existe');
        }
    }

    async create(data) {
        try {
            if (!data.title) {
                const erro = new Error(' NO CREADO : ingrese un titulo al producto')
                throw erro
            } else {
                const product = {
                    id: crypto.randomBytes(12).toString('hex'),
                    photo: data.photo || '',
                    title: data.title,
                    category: data.category,
                    price: data.price,
                    stock: data.stock || 'sin stock'
                }
                let all = await fs.promises.readFile(this.path, 'utf-8')
                all = JSON.parse(all)
                all.push(product)
                all = JSON.stringify(all, null, 2)
                await fs.promises.writeFile(this.path, all)
                console.log('creado');
                return product;
            }
        } catch (error) {
            throw (error);
        }
    }


    async read(category = 'to do') {
        try {
            let all = await fs.promises.readFile(this.path, 'utf-8')
            all = JSON.parse(all)
            if (!category || category === 'to do') {
                console.log(all);
                return all
            }else{
                const filtered = all.filter((el)=>el.category === category)
                if (filtered.length === 0) {
                    return null
                }else{
                    console.log(filtered);
                    return filtered
                }
            }
        } catch (error) {
            console.log(error);
            return null
        }
    }


    async readOne(id) {
        try {
            let all = await fs.promises.readFile(this.path, 'utf-8')
            all = JSON.parse(all)
            const one = all.find((el) => el.id === id)
            if (!one) {
                throw new Error('no se encontro el id')
            } else {
                console.log(one);
                return one
            }
        } catch (error) {
            console.log(error);
        }
    }

    async destroyid(id) {
        try {
            let all = await fs.promises.readFile(this.path, 'utf-8')
            all = JSON.parse(all)
            const one = all.find((el) => el.id === id)
            if (!one) {
                throw new Error('no se encontradoo')
            } else {
                let filtered = all.filter((el) => el.id !== id)
                filtered = JSON.stringify(filtered, null, 2);
                await fs.promises.writeFile(this.path, filtered)
                console.log(`producto : '${id}' eliminado `);
                return one
            }
        } catch (error) {
            console.log(error);
        }
    }
}


const products = new ProductManager()
export default products;


// async function mets() {
//     await products.create({
//         title: 'boca',
//         photo: 'bocaremera.png',
//         category: 'deportivo',
//         price: 250,
//         stock: 38
//     })
//     await products.create({
//         title: 'riber',
//         photo: 'remerariber.png',
//         category: 'deportivo',
//         price: 500,
//         stock: 10
//     })
//     await products.create({
//         title: 'racing',
//         photo: 'remera racing.png',
//         category: 'deportivo',
//         price: 300,
//         stock: 20
//     })
//     await products.create({
//         title: 'independiente',
//         category: 'deportivo',
//         price: 200,
//         stock: 38
//     })
//     await products.create({
//         title: 'pantalon jordan',
//         photo: 'jordan.png',
//         category: 'pantalones',
//         price: 150,
//         stock: 12
//     })
//     await products.create({
//         title: 'pantalon bmw',
//         photo: 'bmw.png',
//         category: 'pantalones',
//         price: 70,
//         stock: 38
//     })
//     await products.create({
//         title: 'media',
//         photo: 'medias.png',
//         category: 'medias',
//         price: 20,
//         stock: 18
//     })
//     await products.create({
//         title: 'abrigo',
//         category: 'ropa',
//         price: 40,
//         stock: 50
//     })
//     await products.create({
//         title: 'buzo GAP',
//         photo: 'gap.png',
//         category: 'buzos',
//         price: 30,
//         stock: 12
//     })
//     await products.create({
//         title: 'buzo shark',
//         category: 'buzos',
//         price: 1200,
//         stock: 10
//     })
//     await products.create({
//         title: 'max 90',
//         photo: 'max90.png',
//         category: 'zapatillas',
//         price: 20,
//         stock: 60
//     })
//     await products.create({
//         title: 'converse',
//         photo: 'converse.png',
//         category: 'zapatillas',
//         price: 500,
//         stock: 10
//     })
//     await products.create({
//         title: 'adidas air',
//         photo: 'air.png',
//         category: 'zapatillas',
//         price: 300,
//         stock: 20
//     })
//     await products.create({
//         title: 'yeezy',
//         category: 'zapatillas',
//         price: 200,
//         stock: 38
//     })
//     await products.create({
//         title: 'media roja',
//         photo: 'media.png',
//         category: 'medias',
//         price: 150,
//         stock: 12
//     })
//     await products.create({
//         title: 'ojota air',
//         photo: 'ojota.png',
//         category: '',
//         price: 70,
//         stock: 38
//     })
//     await products.create({
//         title: 'ojota adidas',
//         photo: 'ojota.png',
//         category: 'ojotas',
//         price: 20,
//         stock: 18
//     })
//     await products.create({
//         title: 'abrigo blanco',
//         category: 'abrigos',
//         price: 40,
//         stock: 50
//     })
//     await products.create({
//         title: 'abrigo verde',
//         photo: 'abrigo.png',
//         category: 'abrigos',
//         price: 30,
//         stock: 12
//     })
//     await products.create({
//         title: 'abrigo azul',
//         category: 'abrigos',
//         price: 1200,
//         stock: 10
//     })
//     await products.read();

//     // await products.readOne('3232')                 //no encontrado
//     // await products.readOne("395a75486d1cc41286ed354f")

//     // await products.destroyid('232323')            //no encontrado
//     // await products.destroyid("1eb7de17d51ea290a8dd4abd")

// }
// mets()