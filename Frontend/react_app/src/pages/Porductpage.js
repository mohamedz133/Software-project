import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ProductPage = (productid) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get('https://localhost:3000/products/' + productid + '/')
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    // Render the product information
    return (
        <div className="Productpage">
            <div className="data">
                <img src={product.image} alt={product.description}/>
            </div>
            <div className="desc">
                <h3>{product.description}</h3>
                <p>Price: {product.price}</p>
            </div>
        </div>
    );
};

export default ProductPage;
