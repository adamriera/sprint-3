/* /Array with products (objects) added directly with push(). Products in this array are repeated. */
let cartList = [];

  /* Improved version of cartList. Cart is an array of products (objects), but each one has a quantity fiel to define its quantity, so these products are not repeated. */
let cart = [];
let total = 0;
let cartItemCount = 0;

// Exercise 1
  /* 1. Loop for to the array products to get the item to add to cart
     2. Add found product to the cartList array */
function buy(id) {
  let product;
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      product = products[i];
      break;
    }
  }
  if (product) {
    cartList.push(product);
    generateCart();
    applyPromotionsCart();
    calculateTotal();
    updateCartItemCount();
    printCart();
  }
}


// Exercise 2
function cleanCart() {
  cartList = [];
  cart = [];
  total = 0;
  cartItemCount = 0;
  printCart();
}

// Exercise 3
  /* Calculate total price of the cart using the "cartList" array */
function calculateTotal() {
  total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total += product.total * product.quantity; //he multiplicat et total per quantitat per sumar-ho tot.
  }
}

// Exercise 4
  /* Using the "cartlist" array that contains all the items in the shopping cart, generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product. */
function generateCart() {
  cart = [];
  for (let i = 0; i < cartList.length; i++) {
    const product = cartList[i];
    let cartItem = cart.find(function(item) { //e afegit el metode find i la funció anònima pasant-li item que es compara amb el producte que ja hi ha a "cart".
      return item.id === product.id;
    });
    if (cartItem) {
      cartItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  }
}

// Exercise 5
  /* Apply promotions to each item in the array "cart" */
function applyPromotionsCart() {
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    if (product.offer) {
      let discount = (product.offer.percent / 100) * product.price;
      product.total = product.price - discount;
    } else {
      product.total = product.price;
    }
  }
}

// Exercise 6
  /* Fill the shopping cart modal manipulating the shopping cart dom. */
function printCart() {
  let cartListElement = document.getElementById('cart_list');
  cartListElement.innerHTML = '';
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    let row = document.createElement('tr');
    let productName = document.createElement('td');
    productName.textContent = product.name;
    row.appendChild(productName);
    let productPrice = document.createElement('td');
    productPrice.textContent = product.price;
    row.appendChild(productPrice);
    let productQuantity = document.createElement('td');
    productQuantity.textContent = product.quantity;
    row.appendChild(productQuantity);
    let productTotal = document.createElement('td');
    productTotal.textContent = product.total;
    row.appendChild(productTotal);
    cartListElement.appendChild(row);
  }
  let totalElement = document.getElementById('total_price');
  totalElement.textContent = total;
  let cartItemCountElement = document.getElementById('count_product');
  cartItemCountElement.textContent = cartItemCount;
}

// ** Nivell II **

// Exercise 7
    /* Refactor previous code in order to simplify it 
       1. Loop for to the array products to get the item to add to cart
       2. Add found product to the cart array or update its quantity in case it has been added previously. */
function addToCart(id) {
  buy(id);
}

// Exercise 8
    /* 1. Loop for to the array products to get the item to add to cart
       2. Add found product to the cartList array */
    function removeFromCart(id) {
      cartList = cartList.filter(function(product) {
        return product.id !== id;
      });
      generateCart();
      applyPromotionsCart();
      calculateTotal();
      updateCartItemCount();
      printCart();
    }

function open_modal() {
  generateCart();
  applyPromotionsCart();
  calculateTotal();
  updateCartItemCount();
  printCart();
}


function updateCartItemCount() {
  cartItemCount = cart.reduce((count, product) => count + product.quantity, 0);
}