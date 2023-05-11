// تحديد المتغيرات
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotalPrice = document.querySelector('.total-price');
const checkoutBtn = document.querySelector('.checkout-btn');

// مصفوفة لتخزين عناصر السلة
let cartItems = [];

// الحصول على المنتج المحدد من الزر
function getProductFromButton(button) {
  const product = button.parentElement;
  const productId = product.querySelector('.add-to-cart-btn').getAttribute('data-product-id');
  const productName = product.querySelector('.product-title').innerText;
  const productPrice = parseFloat(product.querySelector('.product-price').innerText.slice(1));
  const cartItem = { id: productId, name: productName, price: productPrice };
  return cartItem;
}

// إضافة عنصر إلى السلة
function addToCart(item) {
  const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    item.quantity = 1;
    cartItems.push(item);
  }
}

// تحديث عرض السلة
function displayCart() {
  cartItemsContainer.innerHTML = '';
  cartItems.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <p>${item.name} x ${item.quantity}</p>
      <p>$${(item.price * item.quantity).toFixed(2)}</p>
      <button class="remove-item-btn" data-product-id="${item.id}">Remove</button>
    `;
    cartItemsContainer.appendChild(cartItem);
  });
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  cartTotalPrice.innerText = `$${totalPrice.toFixed(2)}`;
}

// إزالة عنصر من السلة
function removeFromCart(productId) {
  cartItems = cartItems.filter(cartItem => cartItem.id !== productId);
}

// تحديث السلة بعد الضغط على زر الإضافة إلى السلة
addToCartBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const product = getProductFromButton(btn);
    addToCart(product);
    displayCart();
  });
});

// تحديث السلة بعد الضغط على زر الإزالة
cartItemsContainer.addEventListener('click', e => {
  if (e.target.classList.contains('remove-item-btn')) {
    const productId = e.target.getAttribute('data-product-id');
    removeFromCart(productId);
    displayCart();
  }
});

// تنفيذ الخروج
checkoutBtn.addEventListener('click', () => {
  alert('Thank you for shopping with us!');
  cartItems = [];
  displayCart();
});
