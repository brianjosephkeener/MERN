import React, { useState } from 'react'
import axios from 'axios';
import {Link, useHistory} from "react-router-dom";
const New = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    const onSubmitHandler = e => {
        e.preventDefault();
        //make a post request to create a new author
        axios.post('http://localhost:8000/api/author', {
            name
        })
            .then(res=>{console.log(res); history.push('');})
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
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <button><Link to="">Cancel</Link></button>
            <input type="submit"/>
        </form>
    )
}

export default New
