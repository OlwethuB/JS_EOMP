// let linkElement = document.createElement("link");
// linkElement.rel = "stylesheet";
// linkElement.href = "/Css/Products.css";
// let display = document.getElementById("books");
// document.head.appendChild(linkElement);

let Products = JSON.parse(localStorage.getItem('Books')) || [
  {
    id:'1',
    name: "To kill a Mockingbird",
    image:
      "/assets/Book Covers/Tokillamockingbird.png",
    author: "Harper Lee",
    category: "Novel",
    price: " 234",
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
    name: "The Power of Now: A Guide to Spiritual Enlightenment",
    image:
      "https://i.postimg.cc/65n3NnCK/6708.jpg",
    author: " Eckhart Tolle",
    category: "Self-help",
    price: " 405",
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
    name: "The Alchemist",
    image:
      "/assets/Book Covers/theAlchemist.jpg",
    author: "Paulo Coelho",
    category: "Novel",
    price: " 124",
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
    name: "Rich Dad Poor Dad",
    image:
      "https://i.postimg.cc/QdqdFD6n/image.jpg",
    author: "Robert Kiyosaki and Sharon Lechter",
    category: "Self-help",
    price: " 368",
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
    name: "The Hitchhiker’s Guide to the Galaxy",
    image:
      "/assets/Book Covers/hitchhikerguide.jpg",
    author: "Douglas Adams",
    category: "Novel",
    price: "250",
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
    name: "Atomic Habits",
    image:
      "https://i.postimg.cc/xCXfpz9W/image.jpg",
    author: "James Clear",
    category: "Self-help",
    price: " 450",
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
      let allNovels = document.getElementById("novels");
      let elementProduct = document.createElement("div");
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
      let allComics = document.getElementById("comics");
      let elementProduct = document.createElement("div");
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
      let allHelp = document.getElementById("helps");
      let elementProduct = document.createElement("div");
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
      let allBiography = document.getElementById("biography");
      let elementProduct = document.createElement("div");
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
      let allHelp = document.getElementById("poetry");
      let elementProduct = document.createElement("div");
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
  let count = 0
  Products.forEach((product) => {
    // using if statements
    if (product.category === "Romance") {
      count++
      console.log(count);
      let allRomance = document.getElementById("romance");
      let elementProduct = document.createElement("div");
      elementProduct.innerHTML = `
            <div class="product-card col ">
            <img src="${product.image}" alt="${product.name}" class="img-thumbnail">
            <h3 class="product-name">${product.name}</h3>
            <p class="author-name">${product.author}</p>
            <p class="price">R ${product.price}</p>
            <button id="addCart" onclick="addClicked(${product.id})">Add to Cart</button>
            </div>
            `;
      allRomance.appendChild(elementProduct);
      // ourAccessories.push(cart);
      // elementProduct.push(cart);
    }
  });
}
// this call displays you nut :[


// Adding to cart biz
/* The end of display display*/

/*Cart display*/


/*adding stuff to the cart */

/*// add products to cart
let addToCart = document.getElementById("addCart");
let productRow = document.getElementsByClassName("product-row");

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
let removeBtn = document.getElementsByClassName("remove");
for (var i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i];
  button.addEventListener("click", removeItem);
}

function removeItem(event) {
  btnClicked = event.target;
  btnClicked.parentElement.parentElement.remove();
  updateCartPrice();
}*/

// 

let cart = JSON.parse(localStorage.getItem("cart")) || [];
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addClicked(productId) {
  let cartContainer = document.getElementById("cartBody");
  let product = Products.find((product) => product.id == productId);
  if (product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCart();
  }
    
}

function deleteFromCart(index) {
  let deletedProduct = cart.splice(index, 1)[0];
  localStorage.setItem('cart', JSON.stringify(cart))
  deletedProduct.quantity++;
  updateCart();
}
updateCart()
function updateCart() {
  let cartContainer = document.getElementById("cartBody");
  // localStorage.setItem("products", JSON.stringify(cart));
  // localStorage.setItem("cart", JSON.stringify(cart));
  cartContainer.innerHTML = "";
  cart.forEach((product, index) => {
      let cartProduct = document.createElement("div");
      cartProduct.innerHTML = `
      <span>${product.name}</span>
      <span>${product.author}</span>
      <span>R ${product.price}</span>
      <input type="number" placeholder="1" min="1" width="50px" height="40px">
      <p>R ${product.price}</p>
      <button onclick="deleteFromCart(${index})" class="delbtn">Delete</button>`;
      cartContainer.appendChild(cartProduct);
  });
    calculateTotal();
}

productsDisplay();

function calculateTotal() {
    let totalElement = document.getElementById("total");
    let total = 0 
    cart.forEach(item => {
      total +=  eval(item.price)
    })

    totalElement.textContent = `${total}`;
}

function clearCheckoutCart() {
    let modalFooter = document.querySelector(".modal-footer");
    modalFooter.innerHTML = `
    <h4>Thank You! Your Order Has Been Processed!</h4>`;
    cart = [];
    updateCart();
}

