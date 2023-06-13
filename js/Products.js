let linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.href = "/Css/Products.css";
let display = document.getElementById("books");
document.head.appendChild(linkElement);

const Products = [
  {
    name: "Book1",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Novel",
    price: "R 926",
    quantity: 10,
  },
  // Add more product objects here
  {
    name: "Book1",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "Something",
    category: "Romance",
    price: "R 926",
    quantity: 10,
  },
  {
    name: "Book1",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Poetry",
    price: "R 926",
    quantity: 10,
  },
  {
    name: "Book1",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Self-help",
    price: "R 926",
    quantity: 10,
  },
  {
    name: "Book1",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Comics",
    price: "R 926",
    quantity: 10,
  },
  {
    name: "Book1",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Biography",
    price: "R 926",
    quantity: 10,
  },
  // Add more product objects here
  {
    name: "Book2",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Novel",
    price: "R 926",
    quantity: 10,
  },
  {
    name: "Book2",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Romance",
    price: "R 926",
    quantity: 10,
  },
  {
    name: "Book2",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Poetry",
    price: "R 926",
    quantity: 10,
  },
  {
    name: "Book2",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Self-help",
    price: "R 926",
    quantity: 10,
  },
  {
    name: "Book2",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Comics",
    price: "R 926",
    quantity: 10,
  },
  {
    name: "Book2",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Biography",
    price: "R 926",
    quantity: 10,
  },
  // Add more product objects here
  {
    name: "Book3",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Novel",
    price: "R 926",
    quantity: 10,
  },
  {
    name: "Book3",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Romance",
    price: "R 926",
    quantity: 10,
  },
  {
    name: "Book3",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Poetry",
    price: "R 926",
    quantity: 10,
  },
  {
    name: "Book3",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Self-help",
    price: "R 926",
    quantity: 10,
  },
  {
    name: "Book3",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Comics",
    price: "R 926",
    quantity: 10,
  },
  {
    name: "Book3",
    image:
      "https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg",
    author: "An Author",
    category: "Biography",
    price: "R 926",
    quantity: 10,
  },
];

// function displayProducts() {
//     const Books = document.getElementById("books");
//     Products.forEach((product) => {
//       const productElement = document.createElement("div");
//       productElement.innerHTML = `
//           <img id="photo" src="${product.image}" alt="${product.name}">
//           <h3>${product.name}</h3>
//           <h3>${product.author}</h3>
//           <p> R ${product.price}</p>
//           <button onclick="addToCart(${product.name})" >Add to cart</button>`;
//       Books.appendChild(productElement);
//     });
//   }


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


function productsDisplay() {

  Products.forEach((product) => {
    // using if statements
    // Novels
    if (product.category === "Novel") {
      const allNovels = document.getElementById("novels");
      const elementProduct = document.createElement("div");
      elementProduct.innerHTML = `
            <div class="product-card col ">
            <img src="${product.image}" alt="${product.name}" class="img-thumbnail">
            <h3>${product.name}</h3>
            <p>${product.author}</p>
            <p>R ${product.price}</p>
            <button onclick="cartPush(${product.name})" >Add to Cart</button>
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
            <h3>${product.name}</h3>
            <p>${product.author}</p>
            <p>R ${product.price}</p>
            <button onclick="cartPush(${product.name})" >Add to Cart</button>
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
            <h3>${product.name}</h3>
            <p>${product.author}</p>
            <p>R ${product.price}</p>
            <button onclick="cartPush(${product.name})" >Add to Cart</button>
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
            <h3>${product.name}</h3>
            <p>${product.author}</p>
            <p>R ${product.price}</p>
            <button onclick="cartPush(${product.name})" >Add to Cart</button>
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
            <h3>${product.name}</h3>
            <p>${product.author}</p>
            <p>R ${product.price}</p>
            <button onclick="cartPush(${product.name})" >Add to Cart</button>
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
            <h3>${product.name}</h3>
            <p>${product.author}</p>
            <p>R ${product.price}</p>
            <button onclick="cartPush(${product.name})" >Add to Cart</button>
            </div>
            `;
      allRomance.appendChild(elementProduct);
      // ourAccessories.push(cart);
      // elementProduct.push(cart);
    }
  });
}
// this call displays you nut :[
productsDisplay()

// Adding to cart biz

