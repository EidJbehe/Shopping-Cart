/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [
  {
      name: "Carton of orange",
      price: 10,
      quantity: 0,
      productId: 1,
      image: 'assets/images/orange.jpg'
  },
  {
      name: "Carton of cherry",
      price: 5,
      quantity: 0,
      productId: 2,
      image: 'assets/images/cherry.jpg'
  },
  {
      name: "Carton of strawberry",
      price: 7,
      quantity: 0,
      productId: 3,
      image: 'assets/images/strawberry.jpg'
  }
];
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
let cart =[];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId){
const product=products.find(p=>p.productId===productId)
if(!product)return;

const productIncart=cart.find(p=>p.productId===productId)
if(productIncart){
  productIncart.quantity++;
}
else{
product.quantity=1;
cart.push(product);

}
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId){
  const productIncart=cart.find(p=>p.productId===productId)
  if(productIncart){
    productIncart.quantity++;
  }
}
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  const productIncart = cart.find(p => p.productId === productId);
  if (productIncart) {
      productIncart.quantity--;

      if (productIncart.quantity === 0) {
          removeProductFromCart(productId);
      }
  }
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId){
  const productIndex =cart.findIndex(p=>p.productId===productId)
  if(productIndex!==-1){
    cart.splice(productIndex, 1);
  }
}
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal(){
return cart.reduce((total,product)=>total+product.price*product.quantity,0);
  
}



/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  cart = [];
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
let balance = 0;

function pay(amount) {
    const total = cartTotal();

    // إذا كان هذا هو الدفع الأول، اجعل الرصيد مساويًا لإجمالي المشتريات
    if (balance === 0) {
        balance = total;
    }

    // خصم المبلغ المدفوع من الرصيد المتبقي
    balance -= amount;

    // إذا كان الرصيد المتبقي أكبر من الصفر، أي لم يتم دفع المبلغ بالكامل
    if (balance > 0) {
        return -balance;  // أرجع القيمة السالبة للمبلغ المتبقي
    } else {
        emptyCart();  // أفرغ السلة بعد اكتمال الدفع
        const cashReturn = Math.abs(balance);
        balance = 0;  // إعادة تعيين الرصيد
        return cashReturn;  // أرجع قيمة المبلغ الزائد
    }
}


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
    products,
    cart,
    addProductToCart,
    increaseQuantity,
    decreaseQuantity,
    removeProductFromCart,
    cartTotal,
    pay, 
    emptyCart,
    /* Uncomment the following line if completing the currency converter bonus */
    // currency
  }