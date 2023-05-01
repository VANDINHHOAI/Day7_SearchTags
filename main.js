const productInput = document.getElementById("product-input");
const addProductBtn = document.getElementById("add-product-btn");
const clearAllBtn = document.getElementById("clear-all-btn");
const productList = document.getElementById("product-list");

function addProduct() {

  if (productInput.value !== "") {
    const product = document.createElement("li")
    const productName = document.createElement("span");
    productName.innerText = productInput.value;
    product.appendChild(productName);
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.classList.add("deleteBtn");
    product.appendChild(deleteBtn);
    productList.appendChild(product);
    productInput.value = "";
    productInput.focus();
    deleteBtn.addEventListener("click", deleteProduct);
  }
}

function deleteProduct(e) {
  e.target.parentElement.remove();
}

function clearAll() {
  while (productList.firstChild) {
    productList.removeChild(productList.firstChild);
  }
}

productInput.addEventListener("keyup", function (event){
  if (event.keyCode === 13) {
    event.preventDefault();
    addProductBtn.click();
  }
});

addProductBtn.addEventListener("click", addProduct);
clearAllBtn.addEventListener("click", clearAll);


