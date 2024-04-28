class Manager {
    constructor (Model, database) {
        this.Model = Model
        this.database = database;
    }
    async create(data){
        try {
            const one = await this.Model.create(data)
            console.log('created');
            console.log(one);
            return one
        } catch (error) {
           throw error 
        }
    }
    async read(cat){
        try {
            const all = await this.Model.find()
            console.log('read all :');
            console.log(all);
            return all
        } catch (error) {
            throw error
        }
    }
    async readOne(id){
        try {
            const one = await this.Model.findById(id)
            console.log('read one :');
            console.log(one);
            return one
        } catch (error) {
            throw error
        }
    }
    async update(id, data){
        try {
            const one = await this.Model.findByIdAndUpdate(id, data,{ new : true }) //devuelve obj act
            return one
        } catch (error) {
           throw(error) 
        }
    }
    async destroy(id){
        try {
            const one = await this.Model.findByIdAndDelete(id)
            console.log('object destroy : ');
            console.log(one);
            return one
        } catch (error) {
            throw(error)
        }
    }

}
export default Manager