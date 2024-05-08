const queries = new URL(location.href);
const pid = queries.searchParams.get('id');

async function fetching() {
    const response = await fetch(`/api/products/${pid}`);
    let data = await response.json();
    data = data.response
    const cardContainer = document.querySelector('.cont'); 
    cardContainer.innerHTML = `
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
                    <a href="#" class="card-link" onclick="addToCart('${data._id}')">Add to Cart</a>
                </div>
            </div>
        </div>
    `;
}
async function addToCart(pid){
    try {
        const data  = {
            user_id : "66298a1fa8836ad2046ed63f",
            product_id : pid,
            quantity : 1,
            state : "reserved"
        }
        const url = "/api/carts/create"
        const opts = {
            method : "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        }
        let response = await fetch(url, opts)
        response = await response.json()
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

fetching();
