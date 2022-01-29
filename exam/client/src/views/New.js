import React, { useState } from 'react'
import axios from 'axios';
import {Link, useHistory} from "react-router-dom";
const New = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill_one, setSkill1] = useState("");
    const [skill_two, setSkill2] = useState("");
    const [skill_three, setSkill3] = useState("");
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    const onSubmitHandler = e => {
        e.preventDefault();
        //make a post request to create a new pet
        axios.post('http://localhost:8000/api/pet', {
            name, type, description, skill_one, skill_two, skill_three
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
            <Link to="/">back to home</Link>
            <h1>Pet Shelter</h1>
            <h2>Know of a pet needing a home?</h2>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <p>
                <label>Type</label><br/>
                <input type="text" onChange={(e)=>setType(e.target.value)} value={type}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <h3>Skills (optional)</h3>
            <p>
                <label>Skill 1</label><br/>
                <input type="text" onChange={(e)=>setSkill1(e.target.value)} value={skill_one}/>
            </p>
            <p>
                <label>Skill 2</label><br/>
                <input type="text" onChange={(e)=>setSkill2(e.target.value)} value={skill_two}/>
            </p>
            <p>
                <label>Skill 3</label><br/>
                <input type="text" onChange={(e)=>setSkill3(e.target.value)} value={skill_three}/>
            </p>
            <button><Link to="">Cancel</Link></button>
            <input type="submit"/>
        </form>
    )
}

export default New
