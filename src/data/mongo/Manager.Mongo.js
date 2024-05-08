class Manager {
    constructor(Model, database) {
        this.Model = Model
        this.database = database;
    }
    async create(data) {
        try {
            const one = await this.Model.create(data)


            return one
        } catch (error) {
            throw error
        }
    }
    async read(category) {
        try {
            let products;
            if (category) {
                // Si se proporciona una categoría, filtrar por esa categoría
                products = await this.Model.find({ category: category });
            } else {
                // Si no se proporciona una categoría, obtener todos los productos
                products = await this.Model.find();
            }
            return products;
        } catch (error) {
            throw error;
        }
    }
    
    async paginate({ filter, opts}) {
        try {
            const all = await this.Model.paginate(filter, opts)
            return all
        } catch (error) {
            throw error
        }
    }
    async readOne(id) {
        try {
            const one = await this.Model.findById(id)

            return one
        } catch (error) {
            throw error
        }
    }
    async update(id, data) {
        try {
            const one = await this.Model.findByIdAndUpdate(id, data, { new: true }) //devuelve obj act
            return one
        } catch (error) {
            throw (error)
        }
    }
    async destroy(id) {
        try {
            const one = await this.Model.findByIdAndDelete(id)
            return one
        } catch (error) {
            throw (error)
        }
    }

}
export default Manager