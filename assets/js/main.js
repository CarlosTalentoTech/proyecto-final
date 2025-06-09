const addBtns = document.querySelectorAll('.product-card-btn');
const productsCounter = document.getElementById('products-counter');
const removeBtns = document.querySelectorAll('.remove-product-btn');

let products = localStorage.getItem('products-in-cart') ? parseInt(localStorage.getItem('products-in-cart')) : 0;

function visitsCounter() {
  let visits = localStorage.getItem('visit-counter');

  if (visits === null) {
    visits = 1;
  } else {
    visits = parseInt(visits) + 1;
  }

  localStorage.setItem('visit-counter', visits);
  document.getElementById('visit-counter').textContent = `Esta página ha sido visitada ${visits} veces.`;
}

function addProduct() {
  addBtns.forEach(button => {
    button.addEventListener('click', () => {
      products++;
      productsCounter.textContent = products;
      localStorage.setItem('products-in-cart', products);
    });
  });
}

function removeProduct() {
  removeBtns.forEach(button => {
    button.addEventListener('click', () => {
      if (products > 0) {
        products--;
        productsCounter.textContent = products;
        localStorage.setItem('products-in-cart', products);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  visitsCounter();
  productsCounter.textContent = products;
  addProduct();
  removeProduct();
});
