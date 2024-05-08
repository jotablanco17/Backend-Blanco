async function fetchingPaginate(category) {
    try {
        let url = "/api/products";
        if (category) {
            url += `?category=${category}`;
        } else {
            url += "/paginate";
        }
        let response = await fetch(url);
        let data = await response.json();
        data = data.response;
        console.log(data);
        renderProducts(data);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}
// Llamar a la función sin categoría al cargar la página
fetchingPaginate(null);

function renderProducts(products) {
    const eventsContainer = document.querySelector('.events');
    let cardsHTML = '';
    for (const product of products) {
        cardsHTML += `
            <div class="col-md-3">
                <div class="card text-center mb-4">
                    <div class="card-body">
                        <h5 class="card-title">Title: ${product.title}</h5>
                    </div>
                    <div class="card-body">
                        <a href="/pages/details.html?id=${product._id}" class="card-link">Detail</a>
                        
                    </div>
                </div>
            </div>
        `;

    }
    eventsContainer.innerHTML = `
        <div class="container">
            <div class="row justify-content-center">
                ${cardsHTML}
            </div>
        </div>
    `;

    
}

async function searchCategory(category) {
    try {
        const response = await fetch(`/api/products/?category=${category}`);
        let data = await response.json();
        data = data.response;
        renderProducts(data);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

async function fetchCategory() {
    const inp = document.getElementById('inp');
    inp.addEventListener('input', (e) => {
        let category = e.target.value.trim();
        fetchingPaginate(category);
    });
}

fetchCategory(); 
