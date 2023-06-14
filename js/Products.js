// let linkElement = document.createElement("link");
// linkElement.rel = "stylesheet";
// linkElement.href = "/Css/Products.css";
// let display = document.getElementById("books");
// document.head.appendChild(linkElement);

const Products = [
  {
    id:'1',
    name: "Book1",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Novel",
    price: " 926",
    quantity: 10,
  },
  // Add more product objects here
  {
    id:'2',
    name: "Book1",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "Something",
    category: "Romance",
    price: " 926",
    quantity: 10,
  },
  {
    id:'3',
    name: "Book1",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Poetry",
    price: " 926",
    quantity: 10,
  },
  {
    id:'4',
    name: "Book1",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Self-help",
    price: " 926",
    quantity: 10,
  },
  {
    id:'5',
    name: "Book1",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Comics",
    price: " 926",
    quantity: 10,
  },
  {
    id:'6',
    name: "Book1",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Biography",
    price: " 926",
    quantity: 10,
  },
  // Add more product objects here
  {
    id:'7',
    name: "Book2",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Novel",
    price: " 926",
    quantity: 10,
  },
  {
    id:'8',
    name: "Book2",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Romance",
    price: " 926",
    quantity: 10,
  },
  {
    id:'9',
    name: "Book2",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Poetry",
    price: " 926",
    quantity: 10,
  },
  {
    id:'10',
    name: "Book2",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Self-help",
    price: " 926",
    quantity: 10,
  },
  {
    id:'11',
    name: "Book2",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Comics",
    price: " 926",
    quantity: 10,
  },
  {
    id:'12',
    name: "Book2",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Biography",
    price: " 926",
    quantity: 10,
  },
  // Add more product objects here
  {
    id:'13',
    name: "Book3",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Novel",
    price: "926",
    quantity: 10,
  },
  {
    id:'14',
    name: "Book3",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Romance",
    price: " 926",
    quantity: 10,
  },
  {
    id:'15',
    name: "Book3",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Poetry",
    price: " 926",
    quantity: 10,
  },
  {
    id:'16',
    name: "Book3",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Self-help",
    price: " 926",
    quantity: 10,
  },
  {
    id:'17',
    name: "Book3",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Comics",
    price: " 926",
    quantity: 10,
  },
  {
    id:'18',
    name: "Book3",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Biography",
    price: " 926",
    quantity: 10,
  },
];
localStorage.setItem("Books", JSON.stringify(Products));

// Products.forEach((product) => {
//   display.innerHTML += `
//     <div class="col">
//               <img id="photo" src="${product.image}" alt="${product.name}">
//               <h3>${product.name}</h3>
//               <h3>${product.author}</h3>
//               <p> R ${product.price}</p>
//               <button onclick="addToCart(${product.name})" >Add to cart</button>
//               </div>`;
// });

/* This is to display the books*/
function productsDisplay() {
  Products.forEach((product) => {
    // using if statements
    // Novels
    if (product.category === "Novel") {
      const allNovels = document.getElementById("novels");
      const elementProduct = document.createElement("div");
      elementProduct.innerHTML += `
      <div class="product-card col">
      <img src="${product.image}" alt="${product.name}" class="img-thumbnail">
      <h3 class="product-name">${product.name}</h3>
      <p class="author-name">${product.author}</p>
      <p class="price">R ${product.price}</p>
      <button  id="addCart" onclick="addClicked(${product.id})" >Add to Cart</button>
      </div>
      `;
      allNovels.appendChild(elementProduct);
    }
  });

  // Comics
  Products.forEach((product) => {
    // using if statements
    if (product.category === "Comics") {
      const allComics = document.getElementById("comics");
      const elementProduct = document.createElement("div");
      elementProduct.innerHTML = `
      <div class="product-card col ">
      <img src="${product.image}" alt="${product.name}" class="img-thumbnail">
      <h3 class="product-name">${product.name}</h3>
      <p class="author-name">${product.author}</p>
      <p class="price">R ${product.price}</p>
      <button  id="addCart" onclick="addClicked(${product.id})" >Add to Cart</button>
      </div>
      `;
      allComics.appendChild(elementProduct);
    }
  });

  // Self-Help
  Products.forEach((product) => {
    // using if statements
    if (product.category === "Self-help") {
      const allHelp = document.getElementById("helps");
      const elementProduct = document.createElement("div");
      elementProduct.innerHTML = `
      <div class="product-card col ">
      <img src="${product.image}" alt="${product.name}" class="img-thumbnail">
      <h3 class="product-name">${product.name}</h3>
      <p class="author-name">${product.author}</p>
      <p class="price">R ${product.price}</p>
      <button  id="addCart" onclick="addClicked(${product.id})" >Add to Cart</button>
      </div>
      `;
      allHelp.appendChild(elementProduct);
      // ourAccessories.push(cart);
      // elementProduct.push(cart);
    }
  });

  // Biography
  Products.forEach((product) => {
    // using if statements
    if (product.category === "Biography") {
      const allBiography = document.getElementById("biography");
      const elementProduct = document.createElement("div");
      elementProduct.innerHTML = `
      <div class="product-card col ">
      <img src="${product.image}" alt="${product.name}" class="img-thumbnail">
      <h3 class="product-name">${product.name}</h3>
      <p class="author-name">${product.author}</p>
      <p class="price">R ${product.price}</p>
      <button  id="addCart" onclick="addClicked(${product.id})">Add to Cart</button>
      </div>
      `;
      allBiography.appendChild(elementProduct);
      // ourAccessories.push(cart);
      // elementProduct.push(cart);
    }
  });

  // Poetry
  Products.forEach((product) => {
    // using if statements
    if (product.category === "Poetry") {
      const allHelp = document.getElementById("poetry");
      const elementProduct = document.createElement("div");
      elementProduct.innerHTML = `
      <div class="product-card col ">
      <img src="${product.image}" alt="${product.name}" class="img-thumbnail">
      <h3 class="product-name">${product.name}</h3>
      <p class="author-name">${product.author}</p>
      <p class="price">R ${product.price}</p>
      <button  id="addCart" onclick="addClicked(${product.id})" >Add to Cart</button>
      </div>
      `;
      allHelp.appendChild(elementProduct);
      // ourAccessories.push(cart);
      // elementProduct.push(cart);
    }
  });

  // Romance
  Products.forEach((product) => {
    // using if statements
    if (product.category === "Romance") {
      const allRomance = document.getElementById("romance");
      const elementProduct = document.createElement("div");
      elementProduct.innerHTML = `
            <div class="product-card col ">
            <img src="${product.image}" alt="${product.name}" class="img-thumbnail">
            <h3 class="product-name">${product.name}</h3>
            <p class="author-name">${product.author}</p>
            <p class="price">R ${product.price}</p>
            <button id="addCart" onclick="addClicked(product.id)">Add to Cart</button>
            </div>
            `;
      allRomance.appendChild(elementProduct);
      // ourAccessories.push(cart);
      // elementProduct.push(cart);
    }
  });
}
// this call displays you nut :[
productsDisplay();

// Adding to cart biz
/* The end of display display*/

/*Cart display*/
// open cart modal
const cartBox = document.querySelector("#cart");
const cartModalOverlay = document.querySelector(".cart-modal-overlay");

cartBox.addEventListener("click", () => {
  if (cartModalOverlay.style.transform === "translateX(-100%)") {
    cartModalOverlay.style.transform = "translateX(0)";
  } else {
    cartModalOverlay.style.transform = "translateX(-100%)";
  }
});

// close cart modal
const closeBtn = document.querySelector("#close-btn");

closeBtn.addEventListener("click", () => {
  cartModalOverlay.style.transform = "translateX(-100%)";
});

cartModalOverlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("cart-modal-overlay")) {
    cartModalOverlay.style.transform = "translateX(-100%)";
  }
});

/*adding stuff to the cart */

/*// add products to cart
const addToCart = document.getElementById("addCart");
const productRow = document.getElementsByClassName("product-row");

for (let i = 0; i < addToCart.length; i++) {
  button = addToCart[i];
  button.addEventListener("click", addClicked);
}

function addClicked(event) {
  button = event.target;
  let cartItem = button.parentElement;
  let itemName = cartItem.getElementsByClassName("product-name")[0].innerText;
  let itemAuthor = cartItem.getElementsByClassName("author-name")[0].innerText;
  let price = cartItem.getElementsByClassName("price")[0].innerText;

  let Src = cartItem.getElementsByID("addCart")[0];
  addItemToCart(itemName, itemAuthor, price);
  updateCartPrice();
  console.log();
}

function addItemToCart(price, itemAuthor, itemName) {
  let productRow = document.createElement("div");
  productRow.classList.add("product-row");
  let productRows = document.getElementsByClassName("product-rows")[0];
  let cartAdding = document.getElementsByID("addCart");

  for (let i = 0; i < addToCart.length; i++) {
    if (cartAdding[i] === Src) {
      alert("This item has already been added to the cart");
      return;
    }
  }

  let cartItems = `
  <div class="product-row">
        <div>
        <h2 class ="cart-name">${itemName}</h2>
        <h3 class ="cart-author">${itemAuthor}</h3>
        </div>
        <span class ="cart-price">${price}</span>
        <input class="product-quantity" type="number" value="1">
        <button class="remove">Remove</button>
        </div>
        
      `;
  productRow.innerHTML = cartItems;
  productRows.append(productRow);
  productRow
    .getElementsByClassName("remove")[0]
    .addEventListener("click", removeItem);
  productRow
    .getElementsByClassName("product-quantity")[0]
    .addEventListener("change", changeQuantity);
  updateCartPrice();
}

// Remove products from cart
const removeBtn = document.getElementsByClassName("remove");
for (var i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i];
  button.addEventListener("click", removeItem);
}

function removeItem(event) {
  btnClicked = event.target;
  btnClicked.parentElement.parentElement.remove();
  updateCartPrice();
}*/

let cart = JSON.parse(localStorage.getItem('books')) || [];

function addClicked(product) {
  const shop = product.find((item) => product.id === product);

  if (shop && product.quantity > 0) {
    cart.push(shop);
    product.quantity--;
    updateCart();
    setItems();
  }
}
                                         

function updateCart() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";

  cart.forEach((Products) => {
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `        
    <div>
        <h2 class ="cart-name">${Products.name}</h2>
        <h3 class ="cart-author">${Products.author}</h3>
    </div>
    <span class ="cart-price">${Products.price}</span>
    <input class="product-quantity" type="number" value="1">
    <button class="remove">Remove</button>
        `;
    cartContainer.appendChild(cartItem);
  });
}


function setItems() {
  localStorage.setItem('books', JSON.stringify(cart));
  console.log(cart);
}

function showTask() {
  const cartContainer = document.getElementById("cart-container");
  cart.forEach((item) => {
    cartContainer.innerHTML += `
    <div>
        <h2 class ="cart-name">${Products.name}</h2>
        <h3 class ="cart-author">${Products.author}</h3>
    </div>
    <span class ="cart-price">${Products.price}</span>
    <input class="product-quantity" type="number" value="1">
    <button class="remove">Remove</button>
    `;
  });
}
showTask();

// Remove products from cart
const removeBtn = document.getElementsByClassName("remove");
for (var i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i];
  button.addEventListener("click", removeItem);
}

function removeItem(event) {
  btnClicked = event.target;
  btnClicked.parentElement.parentElement.remove();
  // updateCartPrice();
}