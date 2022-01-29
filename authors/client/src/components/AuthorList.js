import React from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
    
const AuthorList = (props) => {

    const { removeFromDom } = props;
    
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h2>Favorite Authors:</h2>
            {props.author.map((author, i) => {
                return <p key={i}>
                    <h2>{author.name}</h2>
                    <button><Link to={author._id}> Edit</Link></button>
                |   
                <button onClick={(e)=>{deleteAuthor(author._id)}}>
                    Delete
                </button>
                </p>
            })}
        </div>
        
    )
}
    
export default AuthorList;

