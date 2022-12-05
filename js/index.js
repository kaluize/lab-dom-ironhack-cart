// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  let priceValue = price.innerHTML;
  let quantityValue = quantity.value;
  let subtotalValue = priceValue * quantityValue;
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = subtotalValue;
  return subtotalValue;
}


  // ITERATION 2 e 3
function calculateAll() {
  const products = document.getElementsByClassName("product");
  const total = document.querySelector("#total-value span");
  let totalPrice = 0
  for (let i = 0; i < products.length; i++) { 
    totalPrice += updateSubtotal(products[i]) 
  }
  total.innerText = totalPrice;
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  window.addEventListener({
    
  })
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
