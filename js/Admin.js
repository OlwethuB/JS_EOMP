// fetch from localstorage
let adminContent = JSON.parse(localStorage.getItem(Products))

// sorting and adding



// table 
function display() {
    try{
        adminBody.innerHTML = "";
        if(!products.length) throw "Please add products";
        products?.forEach(product=>{
            adminBody.innerHTML += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.name} by ${product.author}</td>
                    <td>${product.category}</td>
                    <td>${product.Quantity}</td>
                    <td>R${product.price}</td>
                        <td class="edit" data-bs-toggle="modal" data-bs-target="#editProduct${product.id}">Edit</td>
                        <!-- Modal -->
                        <div class="modal fade" id="editProduct${product.id}" tabindex="-1" aria-labelledby="editProductLabel${product.id}" aria-hidden="true">
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1 class="modal-title fs-5" id="editProductLabel${product.id}">Edit</h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                  <form class="form g-2">
                                    <div class="container">
                                        <input class="form-control" type="text" placeholder="Enter the name of the book" value='${product.make}' name="Book-name" id="Book-name" required>
                                        <textarea class="form-control my-2" placeholder="Enter Author name" required name="author" id="author">${product.author}</textarea>
                                        <input class="form-control" type="number" placeholder="Enter price" value='${product.price}' name="amount" id="amount" required>
                                        <input class="form-control my-2" type="url" placeholder="In what category" value='${product.category}' name="category" id="category" required>
                                    </div>
                                  </form>
                                </div>
                                <div class="modal-footer my-2">
                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="btnCloseModal">Close</button>
                                  <button type="button" class="btn btn-success" onclick='new EditProduct(${JSON.stringify(product)})'>Save changes</button>
                                </div>
                              </div>
                            </div>
                        </div>        
                        <td class="delete" onclick='deleteProduct(${JSON.stringify(product)})'>Delete</td>
                </tr>
            `
        });
    }catch(e) {
        alert(e);
    }
};
display();