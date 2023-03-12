// // Get the "Add to Cart" buttons
// const addToCartButtons = document.querySelectorAll(".btn-menu");

// // Get the cart and total price elements
// const cart = document.getElementById("cart");
// const totalPrice = document.getElementById("total-price");

// // Create an empty array to store the cart items
// let cartItems = [];

// // Add an event listener to each "Add to Cart" button
// addToCartButtons.forEach(function(button) {
//   button.addEventListener("click", function(event) {
//     // Prevent the default behavior of the button
//     event.preventDefault();

//     // Get the menu item that was clicked
//     const menuItem = button.parentElement.parentElement;

//     // Get the name, price, and image of the menu item
//     const name = menuItem.querySelector(".location").textContent;
//     const price = menuItem.querySelector(".price").textContent;
//     const image = menuItem.querySelector("img").src;

//     // Create a new object to represent the cart item
//     const cartItem = { name, price, image };

//     // Add the cart item to the cart items array
//     cartItems.push(cartItem);

//     // Render the cart items in the cart element
//     renderCart();

//     // Update the total price
//     updateTotalPrice();
//   });
// });

// // Function to render the cart items in the cart element
// function renderCart() {
//   // Clear the cart element
//   cart.innerHTML = "";

//   // Render each cart item in the cart element
//   cartItems.forEach(function(cartItem, index) {
//     // Create a new div to represent the cart item
//     const div = document.createElement("div");
//     div.classList.add("cart-item");

//     // Add the image, name, and price of the cart item to the div
//     div.innerHTML = `
//       <img src="${cartItem.image}" alt="${cartItem.name}" width="50" height="50">
//       <div>
//         <div>${cartItem.name}</div>
//         <div>${cartItem.price}</div>
//         <button class="btn-remove" data-index="${index}">Remove</button>
//       </div>
//     `;

//     // Add an event listener to the "Remove" button
//     const removeButton = div.querySelector(".btn-remove");
//     removeButton.addEventListener("click", function() {
//       // Get the index of the cart item to remove
//       const index = removeButton.dataset.index;

//       // Remove the cart item from the cart items array
//       cartItems.splice(index, 1);

//       // Render the cart items in the cart element
//       renderCart();

//       // Update the total price
//       updateTotalPrice();
//     });

//     // Add the cart item div to the cart element
//     cart.appendChild(div);
//   });
// }

// // Function to update the total price in the total price element
// function updateTotalPrice() {
//   // Calculate the total price of all the cart items
//   const total = cartItems.reduce(function(sum, cartItem) {
//     return sum + Number(cartItem.price.replace(/\D/g, ""));
//   }, 0);

//   // Display the total price in the total price element
//   totalPrice.textContent = `Total: Rs ${total}`;
// }

// // Get the cart and total price elements by their ids
// const cart = document.getElementById("cart");
// const totalPrice = document.getElementById("total-price");

// // Initialize an empty array to hold the items in the cart
// let cartItems = [];

// // Add event listeners to all the "Order Now" buttons
// const orderButtons = document.querySelectorAll(".btn-menu");
// orderButtons.forEach(button => {
//   button.addEventListener("click", () => {
//     // Get the item details from the clicked button's parent element
//     const parent = button.closest(".menu-item");
//     const name = parent.querySelector(".location").textContent;
//     const price = parent.querySelector(".price").textContent;

//     // Create a new item object with the name, price, and image URL
//     const newItem = {
//       name,
//       price,
//       imgSrc: parent.querySelector("img").getAttribute("src")
//     };

//     // Add the item to the cart array
//     cartItems.push(newItem);

//     // Render the cart HTML
//     renderCart();
//   });
// });

// // Render the cart HTML
// function renderCart() {
//   // Clear the existing HTML inside the cart element
//   cart.innerHTML = "";

//   // Loop through the items in the cart and add their HTML to the cart element
//   cartItems.forEach(item => {
//     const itemHTML = `
//       <div class="cart-item">
//         <img src="${item.imgSrc}" width="150">
//         <div>
//           <p style="font-size: 24px">${item.name}</p>
//           <p style="font-size: 20px">${item.price}</p>
//         </div>
//       </div>
//     `;
//     cart.insertAdjacentHTML("beforeend", itemHTML);
//   });

//   // Calculate the total price and update the HTML
//   const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace(/[^0-9.-]+/g, "")), 0);
//   totalPrice.textContent = `Total Price: RS ${total.toFixed(2)}`;

//   // Add the "Place Order" button to the cart element
//   const placeOrderBtnHTML = `
//     <button style="background-color: #337ab7; color: white; padding: 10px 20px; border: none; border-radius: 5px;">Place Order</button>
//   `;
//   cart.insertAdjacentHTML("beforeend", placeOrderBtnHTML);
// }

// Initialize an empty array to hold the items in the cart
let cartItems = [];

// Get the cart and total price elements by their ids
const cart = document.getElementById("cart");
const totalPrice = document.getElementById("total-price");



// Add event listeners to all the "Order Now" buttons
const orderButtons = document.querySelectorAll(".btn-menu");
orderButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Get the item details from the clicked button's parent element
    const parent = button.closest(".menu-item");
    const name = parent.querySelector(".location").textContent;
    const price = parent.querySelector(".price").textContent;

    // Create a new item object with the name, price, and image URL
    const newItem = {
      name,
      price,
      imgSrc: parent.querySelector("img").getAttribute("src")
    };

    // Add the item to the cart array
    cartItems.push(newItem);

    // Render the cart HTML
    renderCart();
  });
});

// Render the cart HTML
function renderCart() {
  // Clear the existing HTML inside the cart element
  cart.innerHTML = "";

  // Loop through the items in the cart and add their HTML to the cart element
  cartItems.forEach((item, index) => {
    const itemHTML = `
      <div class="cart-item">
        <img src="${item.imgSrc}" width="150">
        <div>
          <p style="font-size: 24px">${item.name}</p>
          <p style="font-size: 20px">${item.price}</p>
          <button class="remove-btn" data-index="${index}" style="background-color: #e74c3c; color: white; padding: 5px 10px; border: none; border-radius: 5px;">Remove</button>
        </div>
      </div>
    `;
    cart.insertAdjacentHTML("beforeend", itemHTML);
    const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace(/[^0-9.-]+/g, "")), 0);
    console.log(total); // add this line to check if the total price is being calculated correctly
    totalPrice.textContent = `Total Price: RS ${total.toFixed(2)}`;
  });

  // Add event listeners to all the "Remove" buttons
  const removeButtons = document.querySelectorAll(".remove-btn");
  removeButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Get the index of the item to remove from the data-index attribute of the clicked button
      const indexToRemove = button.getAttribute("data-index");

      // Remove the item from the cartItems array
      cartItems.splice(indexToRemove, 1);

      // Render the cart HTML
      renderCart();
    });
  });

  // Calculate the total price and update the HTML
  const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace(/[^0-9.-]+/g, "")), 0);
  totalPrice.textContent = `Total Price: RS ${total.toFixed(2)}`;

  // Add the "Place Order" button to the cart element
  // const placeOrderBtnHTML = `
  //   <button style="background-color: #337ab7; color: white; padding: 10px 20px; border: none; border-radius: 5px;">Place Order</button>
  // `;
  // cart.insertAdjacentHTML("beforeend", placeOrderBtnHTML);
}









// let add_to_cart=document.getElementsByClassName('add-cart');
// let mainContainer=document.getElementsByTagName('tbody')[0]
// let quantity_field=document.getElementsByClassName('num')

// let removeBtn=document.getElementsByClassName('uk-button-danger')



// for(let i=0;i<add_to_cart.length;i++){
//     add_to_cart[i].addEventListener('click',addtocart)
// }
// function addtocart(events){
//  let btn=events.target
//     let btn_parent=btn.parentElement
//     let btn_grandparent=btn.parentElement.parentElement
//     let itemName=btn_parent.children[0].innerText
//    let itemPrice=btn_parent.children[1].innerText

  
//     let itemImage=btn_grandparent.children[0].children[0].src
//     let itemContainer=document.createElement('tr')
//     itemContainer.innerHTML=`
                
//     <td><input class="uk-checkbox" type="checkbox"></td>
//     <td>  <a class="block relative h-48 rounded overflow-hidden " >
//     <img class="block relative h-56 rounded overflow-hidden" src="${itemImage}" width="300px" height="300px"></a></td>
//     <td class="uk-table-link">
//       <h3 class="item-name">${itemName}</h3>
      
//     </td>  
//        <td class="uk-text-truncate card-cost"><h3>${itemPrice}</h3></td>
//    <td>   <input type="number" class="num" value="1"></td>

          

//        <td class="uk-text-truncate total-price"><h3>${itemPrice}</h3></td>
//        <td><button class="uk-button uk-button-danger"  type="button" id="remove">Remove</button></td>`
//   mainContainer.append(itemContainer)

//   for(let i=0;i<quantity_field.length;i++){
//     quantity_field[i].addEventListener('change',update)
// }
//     grandTotal()



//     for(let i=0;i<removeBtn.length;i++){
//         removeBtn[i].addEventListener('click',removeItem)
//     }
    
// }