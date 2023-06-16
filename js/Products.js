// let linkElement = document.createElement("link");
// linkElement.rel = "stylesheet";
// linkElement.href = "/Css/Products.css";
// let display = document.getElementById("books");
// document.head.appendChild(linkElement);

let Products = JSON.parse(localStorage.getItem("Books")) || [
  {
    id: "1",
    name: "To kill a Mockingbird",
    image: "/assets/Book Covers/Tokillamockingbird.png",
    author: "Harper Lee",
    category: "Novel",
    price: " 234",
    quantity: 10,
  },
  // Add more product objects here
  {
    id: "2",
    name: "Cinderella is Dead",
    image: "https://i.postimg.cc/sxhsJC3S/376097366609179215.jpg",
    author: "Kalynn Bayron",
    category: "Romance",
    price: " 400",
    quantity: 10,
  },
  {
    id: "3",
    name: "Milk and honey",
    image: "https://i.postimg.cc/VvPx9rv9/9781449474256-pdpxl.jpg",
    author: "Rupi Kaur",
    category: "Poetry",
    price: " 353",
    quantity: 10,
  },
  {
    id: "4",
    name: "The Power of Now: A Guide to Spiritual Enlightenment",
    image: "https://i.postimg.cc/65n3NnCK/6708.jpg",
    author: " Eckhart Tolle",
    category: "Self-help",
    price: " 405",
    quantity: 10,
  },
  {
    id: "5",
    name: "Kwezi",
    image: "https://i.postimg.cc/JtCDNqCr/image.jpg",
    author: "Loyiso Mkize",
    category: "Comics",
    price: " 435",
    quantity: 10,
  },
  {
    id: "6",
    name: "Steve Jobs",
    image: "/assets/Book Covers/Steve Jobs.jpg",
    author: "Walter Isaacson",
    category: "Biography",
    price: " 427",
    quantity: 10,
  },
  // Add more product objects here
  {
    id: "7",
    name: "The Alchemist",
    image: "/assets/Book Covers/theAlchemist.jpg",
    author: "Paulo Coelho",
    category: "Novel",
    price: " 224",
    quantity: 10,
  },
  {
    id: "8",
    name: "Pride and Prejudice",
    image: "https://i.postimg.cc/jSsCRCsF/image.jpg",
    author: "Jane Austen",
    category: "Romance",
    price: " 316",
    quantity: 10,
  },
  {
    id: "9",
    name: "Don't Call Us Dead: Poems",
    image: "https://i.postimg.cc/FzxBjT2m/9781555977856-pdpxl.jpg",
    author: "Danez Smithr",
    category: "Poetry",
    price: " 284",
    quantity: 10,
  },
  {
    id: "10",
    name: "Rich Dad Poor Dad",
    image: "https://i.postimg.cc/QdqdFD6n/image.jpg",
    author: "Robert Kiyosaki and Sharon Lechter",
    category: "Self-help",
    price: " 368",
    quantity: 10,
  },
  {
    id: "11",
    name: "Cherub: The Recruit",
    image: "https://i.postimg.cc/523pnP9k/62a94c86a4a61381395336-w803h620.webp",
    author: "Ian Edginton and Robert Muchamore",
    category: "Comics",
    price: " 414",
    quantity: 10,
  },
  {
    id: "12",
    name: "Everything I Know About Love",
    image: "https://i.postimg.cc/xdnGD97f/46041465.jpg",
    author: "Dolly Alderton",
    category: "Biography",
    price: " 391",
    quantity: 10,
  },
  // Add more product objects here
  {
    id: "13",
    name: "The Hitchhiker’s Guide to the Galaxy",
    image: "/assets/Book Covers/hitchhikerguide.jpg",
    author: "Douglas Adams",
    category: "Novel",
    price: "250",
    quantity: 10,
  },
  {
    id: "14",
    name: "Honey and Spice: A Reese's Book Club Pick",
    image: "https://i.postimg.cc/gc80R3j7/honey-spice.jpg",
    author: "Bolu Babalola",
    category: "Romance",
    price: " 437",
    quantity: 10,
  },
  {
    id: "15",
    name: "Pillow Thoughts",
    image: "https://i.postimg.cc/9QsJq3rZ/9781449489755-pdpxl.jpg",
    author: "Courtney Peppernellr",
    category: "Poetry",
    price: " 337",
    quantity: 10,
  },
  {
    id: "16",
    name: "Atomic Habits",
    image: "https://i.postimg.cc/xCXfpz9W/image.jpg",
    author: "James Clear",
    category: "Self-help",
    price: " 450",
    quantity: 10,
  },
  {
    id: "17",
    name: "Noughts & Crosses (Graphic Novel)",
    image: "/assets/Book Covers/Noughts and crosses.jpg",
    author: "Ian Edginton/Novel by Malorie blackman",
    category: "Comics",
    price: " 364",
    quantity: 10,
  },
  {
    id: "18",
    name: "The Inheritors: An Intimate Portrait of South Africa's Racial Reckoning",
    image: "https://i.postimg.cc/g0gZC88s/59365047.jpg",
    author: "Eve Fairbanks",
    category: "Biography",
    price: " 336",
    quantity: 10,
  },
];
localStorage.setItem("Books", JSON.stringify(Products));


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
      <h4 class="product-name">${product.name}</h4>
      <h6 class="author-name">${product.author}</h6>
      <span class="price">R ${product.price}</span>
      <button  id="addCart" onclick="addClicked(${product.id})" >Add to Cart</button>
      </div>
      <br>
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
      <h4 class="product-name">${product.name}</h4>
      <h6 class="author-name">${product.author}</h6>
      <span class="price">R ${product.price}</span>
      <button  id="addCart" onclick="addClicked(${product.id})" >Add to Cart</button>
      </div>
      <br>
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
      <h4 class="product-name">${product.name}</h4>
      <h6 class="author-name">${product.author}</h6>
      <span class="price">R ${product.price}</span>
      <button  id="addCart" onclick="addClicked(${product.id})" >Add to Cart</button>
      </div>
      <br>
      `;
      allHelp.appendChild(elementProduct);
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
      <h4 class="product-name">${product.name}</h4>
      <h6 class="author-name">${product.author}</h6>
      <span class="price">R ${product.price}</span>
      <button  id="addCart" onclick="addClicked(${product.id})">Add to Cart</button>
      </div>
      <br>
      `;
      allBiography.appendChild(elementProduct);
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
      <h4 class="product-name">${product.name}</h4>
      <h6 class="author-name">${product.author}</h6>
      <span class="price">R ${product.price}</span>
      <button  id="addCart" onclick="addClicked(${product.id})" >Add to Cart</button>
      </div>
      <br>
      `;
      allHelp.appendChild(elementProduct);
    }
  });

  // Romance
  Products.forEach((product) => {
    // using if statements
    if (product.category === "Romance") {
      let allRomance = document.getElementById("romance");
      let elementProduct = document.createElement("div");
      elementProduct.innerHTML = `
            <div class="product-card col ">
            <img src="${product.image}" alt="${product.name}" class="img-thumbnail">
            <h4  class="product-name">${product.name}</h4>
            <h6 class="author-name">${product.author}</h6>
            <span class="price">R ${product.price}</span>
            <button id="addCart" onclick="addClicked(${product.id})">Add to Cart</button>
            </div>
            <br>
            `;
      allRomance.appendChild(elementProduct);
    }
  });
}

// Adding to cart biz
/* The end of display display*/

/*Cart display*/
 

let cart = JSON.parse(localStorage.getItem("cart")) || [];


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

  cartContainer.innerHTML = "";
  cart.forEach((product, index) => {
      let cartProduct = document.createElement("div");
      cartProduct.innerHTML = `
      <span>${product.name}</span>
      <span>By ${product.author}</span>
      <input class="quantity ms-3" type="number" value="1" min="1">
      <span class="CP ms-3">R ${product.price}</span>
      <button onclick="deleteFromCart(${index})" class="delBtn p-1">X</button>
      <hr>`;
      cartContainer.appendChild(cartProduct);
  });
    calculateTotal();
  }
  
/*// sort products by price or name 
    function sortProducts() {
      let sortingSelect = document.getElementById("sortingSelect");
      let selectedIndex = sortingSelect.selectedIndex;

      switch (selectedIndex) {
        case 1:
          Products.sort(function (a, b) {
            return (
              parseInt(a.price.substring(1)) - parseInt(b.price.substring(1))
            );
          });
          break;
        case 2:
          Products.sort(function (a, b) {
            return a.name.localeCompare(b.name);
          });
          break;
      }
    }
    sortProducts();*/
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





  
