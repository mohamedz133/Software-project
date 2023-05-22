import React, { useState } from 'react';
import './css/Home.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  function getProductFromButton(button) {
    const product = button.parentElement;
    const productId = product.querySelector('.add-to-cart-btn').getAttribute('data-product-id');
    const productName = product.querySelector('.product-title').innerText;
    const productPrice = parseFloat(product.querySelector('.product-price').innerText.slice(1));
    const cartItem = { id: productId, name: productName, price: productPrice };
    return cartItem;
  }

  function addToCart(item) {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
      setCartItems([...cartItems]);
    } else {
      item.quantity = 1;
      setCartItems([...cartItems, item]);
    }
  }

  function removeFromCart(productId) {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== productId));
  }

  function displayCart() {
    return (
        <>
        <h1>Shopping Cart</h1>
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <p>{item.name} x {item.quantity}</p>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
              <button className="remove-item-btn" data-product-id={item.id} onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <p>Total: <span className="total-price">${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span></p>
        </div>
        <button className="checkout-btn" onClick={() => { alert('Thank you for shopping with us!'); setCartItems([]); }}>Checkout</button>
        </>
    );
  }

    return (
        <div className="App">
            <i className="fa-duotone fa-user-tie-hair"></i>
            <div className="header">
                <ul className="nav">
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">Children</a></li>
                </ul>
                <div className="clear"></div>
            </div>
            <div className="products-container">
                <div className="product">
                    <div className="product-details">
                        <div className="product1"></div>
                        <h2 className="product-title">Blue Denim Jacket</h2>
                        <p className="product-description">Stylish blue denim jacket with a classic design.</p>
                        <p className="product-price">$60.00</p>
                        <button className="add-to-cart-btn" data-product-id="1" onClick={(e) => { e.preventDefault(); addToCart(getProductFromButton(e.target)); }}>Add to Cart</button>
                    </div>
                </div>
                <div className="product">
                    <div className="product-details">
                        <div className="product2"></div>
                        <h2 className="product-title">Black T-Shirt</h2>
                        <p className="product-description">Comfortable black t-shirt made of soft cotton.</p>
                        <p className="product-price">$20.00</p>
                        <button className="add-to-cart-btn" data-product-id="2" onClick={(e) => { e.preventDefault(); addToCart(getProductFromButton(e.target)); }}>Add to Cart</button>
                    </div>
                </div>


                <div className="product">
                    <div className="product-details">
                        <div className="product3"></div>
                        <h2 className="product-title">Red Hoodie</h2>
                        <p className="product-description">Warm and cozy red hoodie made of high-quality fabric.</p>
                        <p className="product-price">$45.00</p>
                        <button className="add-to-cart-btn" data-product-id="3" onClick={(e) => { e.preventDefault(); addToCart(getProductFromButton(e.target)); }}>Add to Cart</button>
                    </div>
                </div>

                <div className="product">
                    <div className="product-details">
                        <div className="product4"></div>
                        <h2 className="product-title">Fashon Dress</h2>
                        <p className="product-description">Modern dress ( 2023 ) made of high-quality fabric.</p>
                        <p className="product-price">$100.00</p>
                        <button className="add-to-cart-btn" data-product-id="4" onClick={(e) => { e.preventDefault(); addToCart(getProductFromButton(e.target)); }}>Add to Cart</button>
                    </div>
                </div>


                <div className="product">
                    <div className="product-details">
                        <div className="product5"></div>
                        <h2 className="product-title">Black Skirt</h2>
                        <p className="product-description">Wonderful wide Skirt of high-quality.</p>
                        <p className="product-price">$40.00</p>
                        <button className="add-to-cart-btn" data-product-id="5" onClick={(e) => { e.preventDefault(); addToCart(getProductFromButton(e.target)); }}>Add to Cart</button>
                    </div>
                </div>



                <div className="product">
                    <div className="product-details">
                        <div className="product6"></div>
                        <h2 className="product-title">Women Pants</h2>
                        <p className="product-description">A new well made gray wide women pants.</p>
                        <p className="product-price">$50.00</p>
                        <button className="add-to-cart-btn" data-product-id="6" onClick={(e) => { e.preventDefault(); addToCart(getProductFromButton(e.target)); }}>Add to Cart</button>
                    </div>
                </div>


                <div className="product">
                    <div className="product-details">
                        <div className="product7"></div>
                        <h2 className="product-title">Fashon boys wear</h2>
                        <p className="product-description">Warm and cozy boys wear made of high-quality.</p>
                        <p className="product-price">$70.00</p>
                        <button className="add-to-cart-btn" data-product-id="7" onClick={(e) => { e.preventDefault(); addToCart(getProductFromButton(e.target)); }}>Add to Cart</button>
                    </div>
                </div>

                <div className="product">
                    <div className="product-details">
                        <div className="product8"></div>
                        <h2 className="product-title">Crazy Dressing</h2>
                        <p className="product-description">A new stylesh cute dress for girls.</p>
                        <p className="product-price">$20.00</p>
                        <button className="add-to-cart-btn" data-product-id="8" onClick={(e) => { e.preventDefault(); addToCart(getProductFromButton(e.target)); }}>Add to Cart</button>
                    </div>
                </div>
                <div className="product">
                    <div className="product-details">
                        <div className="product9"></div>
                        <h2 className="product-title">Stylesh Boys dressing</h2>
                        <p className="product-description">for summer , made of high-quality fabric.</p>
                        <p className="product-price">$55.00</p>
                        <button className="add-to-cart-btn" data-product-id="9" onClick={(e) => { e.preventDefault(); addToCart(getProductFromButton(e.target)); }}>Add to Cart</button>
                    </div>
                </div>
            </div>
            {displayCart()}
        </div>
    );
}



export default App;
