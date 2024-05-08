async function fecthingCart() {
    try {
        const responsee = await fetch("/api/carts?user_id=66298a1fa8836ad2046ed63f")
let template = ""
const container = document.getElementsByClassName('container')
let data = await responsee.json()
data = data.response
console.log(data);
    template += `
    <div class="col-md-3">
        <div class="card text-center mb-4">
            <div class="card-body">
                <h5 class="card-title">title: ${data.title}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">category: ${data.category}</li>
                <li class="list-group-item">price: ${data.price}</li>
                <li class="list-group-item">stock: ${data.stock}</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link" onclick="destroy('${data._id}')">X</a>
            </div>
        </div>
    </div>
`
container.innerHTML = template
    } catch (error) {
        console.log(error);
    }
}
fecthingCart()