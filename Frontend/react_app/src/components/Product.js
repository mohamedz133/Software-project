import React from 'react';

function Product(props) {



    return (
        <div className="product">
            <div className="product-image">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="product-name">
                {props.name}
            </div>
            <div className="product-price">
                {props.price}
            </div>

        </div>
    );

}

export default Product;
