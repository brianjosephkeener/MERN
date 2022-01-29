import React from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
    
const ProductList = (props) => {

    const { removeFromDom } = props;
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h2>All Products:</h2>
            {props.product.map((product, i) => {
                return <p key={i}>
                    <Link to={product._id}> title: {product.title} id: {product._id}</Link>
                
                |   
                <button onClick={(e)=>{deleteProduct(product._id)}}>
                    Delete
                </button>
                </p>
            })}
        </div>
        
    )
}
    
export default ProductList;

