
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './actions';

const ProductPage = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{product.name}</h1>
            <button onClick={() => dispatch(addToCart(product))}>Додати в кошик</button>
        </div>
    );
};

export default ProductPage;
