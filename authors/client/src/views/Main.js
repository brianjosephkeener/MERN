import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorList from '../components/AuthorList';
import {Link} from 'react-router-dom';

const Main = (props) => {
    const [author, setAuthor] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/author')
            .then(res=>{
                setAuthor(res.data);
            })
            .catch(err => console.error(err));
    },[]);

const removeFromDom = authorId => {
    setAuthor(author.filter(author => author._id != authorId));
}

    return (
        <div>
        <Link to="new/author">Add an author</Link>
           <hr/>
           {<AuthorList author={author} removeFromDom={removeFromDom}/>}
        </div>
    )
}
    
export default Main;