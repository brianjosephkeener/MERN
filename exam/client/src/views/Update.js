import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory, Link } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill_one, setSkill1] = useState("");
    const [skill_two, setSkill2] = useState("");
    const [skill_three, setSkill3] = useState("");
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill_one);
                setSkill2(res.data.skill_two);
                setSkill3(res.data.skill_three);
            })
    }, []);
    
    const updatePet = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pet/' + id, {
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
            <Link to="/">back to home</Link>
            <h1>Edit {name}</h1>
            <form onSubmit={updatePet}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Name</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <p>
                    <label>Type</label><br />
                    <input type="text" 
                    name="type" 
                    value={type} 
                    onChange={(e) => { setType(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description" 
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <p>
                    <label>Skill One</label><br />
                    <input type="text" 
                    name="skill_one" 
                    value={skill_one} 
                    onChange={(e) => { setSkill1(e.target.value) }} />
                </p>
                <p>
                    <label>Skill Two</label><br />
                    <input type="text" 
                    name="skill_two" 
                    value={skill_two} 
                    onChange={(e) => { setSkill2(e.target.value) }} />
                </p>
                <p>
                    <label>Skill Three</label><br />
                    <input type="text" 
                    name="skill_three" 
                    value={skill_three} 
                    onChange={(e) => { setSkill3(e.target.value) }} />
                </p>
                <button><Link to="">Cancel</Link></button>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;

