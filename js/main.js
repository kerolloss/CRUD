var productNameInput = document.getElementById("productName")
var productPriceInput = document.getElementById("productPrice")
var productCategoryInput = document.getElementById("productCategory")
var productDescriptionInput = document.getElementById("productDescription")
var addBtn = document.getElementById("addBtn");
var updateBtn = document.getElementById("updateBtn");
var product_name_alert = document.getElementById("product_name_alert");

// localStorage.setItem("Academy","Route");
// localStorage.getItem('Academy');
// localStorage.removeItem("Academy");
// localStorage.clear();
// localStorage.length
// localStorage.key

var productsContainer = []
if (localStorage.getItem("products") != null) {
    productsContainer = JSON.parse( localStorage.getItem('products') );
    displayProducts(productsContainer);
}

function addProduct(){
    if (validateProductName()) {
        var product = {
            name: productNameInput.value,
            price: productPriceInput.value,
            category: productCategoryInput.value,
            description: productDescriptionInput.value
        }
        productsContainer.push(product)
        localStorage.setItem("products",JSON.stringify(productsContainer))
        displayProducts(productsContainer);
        product_name_alert.classList.replace('d-block', 'd-none')

        // clearForm();
    } else {
        product_name_alert.classList.replace('d-none', 'd-block')
    }
}

function validateProductName() {
    var regex = /^[A-Za-z]{3,20}$/;
    // var x = new RegExp('^[A-Z][a-z]{3,8}$'); //<-- the same function with different syntax
    return regex.test(productNameInput.value);
}

function clearForm(){
    productNameInput.value = ""
    productPriceInput.value = ""
    productCategoryInput.value = ""
    productDescriptionInput.value = ""
}
function displayProducts(elements) {
    var cartona =''
    for (var i = elements.length-1; i > 0; i--) {
        cartona += `
        <tr scope="row">
            <th>${elements[i].name}</th>
            <td>${elements[i].price}</td>
            <td>${elements[i].category}</td>
            <td>${elements[i].description}</td>
            <td>
                <button onclick="setFormForUpdate(${i});" class="btn btn-warning btn-sm my-1">Update</button>
                <button  onclick="deleteProduct(${i});" class="btn btn-danger btn-sm my-1" >Delete</button>
            </td>
        </tr>`
    }
    document.getElementById("tableData").innerHTML = cartona;
    clearForm();
}
function deleteProduct(productIndex){
    productsContainer.splice(productIndex,1);
    localStorage.setItem("products",JSON.stringify(productsContainer))

    displayProducts(productsContainer);
}
function searchProducts(term){
    var matchedProducts = [];
    for (var i = 0; i < productsContainer.length; i++) {
        if ( productsContainer[i].name.toLowerCase().includes(term.toLowerCase()) ) {
            matchedProducts.push( productsContainer[i] );
        }
    }
    displayProducts(matchedProducts);
}
var pIndex;
function setFormForUpdate(productIndex){
    addBtn.classList.replace('d-block', 'd-none')
    updateBtn.classList.replace('d-none', 'd-block')
    pIndex = productIndex;
    productNameInput.value = productsContainer[productIndex].name;
    productPriceInput.value = productsContainer[productIndex].price;
    productCategoryInput.value = productsContainer[productIndex].category;
    productDescriptionInput.value = productsContainer[productIndex].description;
}
function updateProduct(pIndex){
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        description: productDescriptionInput.value
    }
    productsContainer.splice(pIndex,1,product)
    localStorage.setItem("products",JSON.stringify(productsContainer))
    displayProducts(productsContainer);
    addBtn.classList.replace('d-none', 'd-block')
    updateBtn.classList.replace('d-block', 'd-none')

}

var x = document.getElementById();
var elements = Array.from( document.getElementsByClassName('item') );
elements.slice(1,3)
for (var i = 0; i < elements.length; i++) {
    console.log(elements[i]);    
}