import React, { useState, useEffect } from 'react';
import './css/fontawesome.min.css';
import './css/Home.css';

function App() {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    function fetchProducts() {
        fetch("http://localhost:3000/api/products")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log('Error fetching products:', error));
    }

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

    function displayFilteredProducts() {
        return (
            <>
                {products.map(product => (
                    <div key={product.id} className="product">
                        <div className="product-details">
                            <div className={`product-image product${product.id}`}></div>
                            <h2 className="product-title">{product.title}</h2>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">${product.price.toFixed(2)}</p>
                            <button className="add-to-cart-btn" data-product-id={product.id} onClick={(e) => { e.preventDefault(); addToCart(getProductFromButton(e.target)); }}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </>
        );
    }

    function displayCart() {
        return (
            <>
                <h1 className="shopping">Shopping Cart</h1>
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
                    <button onClick={fetchProducts}>Men</button>
                    <button onClick={fetchProducts}>Women</button>
                    <button onClick={fetchProducts}>Children</button>
                </ul>
                <div className="clear"></div>
            </div>
            <div className="products-container">
                {displayFilteredProducts()}
            </div>
            {displayCart()}
        </div>
    );
}

export default App;
