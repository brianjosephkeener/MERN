import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useHistory } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const history = useHistory();

    const { removeFromDom } = props;
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
            history.push('/')
    }
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div key={product._id}>
            <h1>{product.title}</h1>
            <h2>price: {product.price}</h2>
            <h2>description: {product.description}</h2>
            <Link to={"/product/" + product._id + "/edit"}>Edit</Link>
            <button onClick={(e)=>{deleteProduct(product._id)}}>
            Delete
            </button>

        </div>
        
    )
}
    
export default Detail;
