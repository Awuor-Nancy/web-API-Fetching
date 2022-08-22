
const api_url = "http://127.0.0.1:5000/products";

// Defining async function
async function fetchProducts() {

    // Storing response
    const response = await fetch(api_url);
    console.log(response);

    // Storing data in form of JSON
    var products = await response.json();
    console.log(products);

    if (response) {
        console.log("successful");

    }
    // let output = Show(data);
    //     console.log(output);
    // };
    
let myProduct = ""
products.map((product) => (
    myProduct += 
    `<h1>${product.name}</h1>
     <h1>${product.category}</h1>`
    )

    )
    console.log('the result is', myProduct);
}
fetchProducts();

document.getElementById("products").innerHTML = `Hello`;



fetch('http://127.0.0.1:5000/products')
    .then((data) => {
        console.log(data);
        return data.json();
    })
    .then((fetchedData) => {

        let myData = "";

        fetchedData.map((result) => {
            myData += `
                <div>
                    <h1>${result.name}</h1>
                    <p>${result.category}</p>
                </div>
            `;
        })

        document.getElementById('root').innerHTML = myData;
    }).catch((err) => {
        console.log(err)
    });



// let Map = data =>{
//     let tableProducts = 
//     `<tr>
//         <th>name</th>
//         <th>category</th>
//     </tr>`;

//     // loop though the table Products
//     for(let i of data.list){

//         tableProducts += `<tr>
//         <td>${i.name}</td>
//         <td>${i.category}</td>
//         </tr>`;
//     }


// function getProducts(){
//    fetch('http:localhost:5000/')

//     .then(function(response){
//         if(response.ok){
//             return response.json();

//         }else{
//             throw new Error("not successful");

//         }
//     })
//     .then (function(data){
//         console.log(data);

//     })
//     .catch(function(error){
//         console.log(error);
//     })      
// }
// getProducts()