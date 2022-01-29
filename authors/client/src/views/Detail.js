import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useHistory } from "react-router-dom";
    
const Detail = (props) => {
    const [author, setAuthor] = useState({})
    const { id } = useParams();
    const history = useHistory();

    const { removeFromDom } = props;
    
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.error(err));
            history.push('/')
    }
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' +id)
            .then(res => setAuthor(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div key={author._id}>
            <h1>{author.title}</h1>
            <h2>Edit this author</h2>
            <h2>description: {author.description}</h2>
            <Link to={"/author/" + author._id + "/edit"}>Edit</Link>
            <button onClick={(e)=>{deleteAuthor(author._id)}}>
            Delete
            </button>

        </div>
        
    )
}
    
export default Detail;
