import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory, Link } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setName(res.data.name);
            })
    }, []);
    
    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/' + id, {
            name
        })
            .then(res =>{console.log(res); history.push('');})
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse))
                {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
        }
                )
    }
    
    return (
        <div>
            <h1>Update Author</h1>
            <form onSubmit={updateAuthor}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <button><Link to="">Cancel</Link></button>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;

