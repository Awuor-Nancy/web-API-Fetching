
const api_url = "http://127.0.0.1:5000/products";

async function fetchProducts() {

    const response = await fetch(api_url);

    var products = await response.json();

    if (response.ok) {
        console.log("successful");
    }

    // let myProduct = "";

    // products.map((product) => (
    //     myProduct += 
    //     `<div>
    //         <h1>${product.name}</h1>
    //         <h1>${product.category}</h1>
    //     </div>
    //     `
    // ))

    let myProduct = "";

    products.map((product) => (
        myProduct += 
        
        
        `<div>
            <h1>${product.name}</h1>
            <h1>${product.category}</h1>
        </div>
        `
    ))
    document.getElementById('root').innerHTML = myProduct;
}

fetchProducts();

