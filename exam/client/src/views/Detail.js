import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useHistory } from "react-router-dom";
    
const Detail = (props) => {
    const [pet, setPet] = useState({})
    const { id } = useParams();
    const history = useHistory();

    const { removeFromDom } = props;
    
    const deletePet = (petId) => {
        axios.delete('http://localhost:8000/api/pet/' + petId)
            .then(res => {
                removeFromDom(petId)
            })
            .catch(err => console.error(err));
            history.push('/')
    }
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' +id)
            .then(res => setPet(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div key={pet._id}>
            <Link to="/">back to home</Link>
            <h1>Pet Shelter</h1>
            <h1>Details about: {pet.name}</h1>
            <h2>Pet Type: {pet.type}</h2>
            <h2>description: {pet.description}</h2>
            <h2>Skills: {pet.skill_one} <br></br> {pet.skill_two} <br></br> {pet.skill_three} </h2>
            <button onClick={(e)=>{deletePet(pet._id)}}>
            Adopt {pet.name}
            </button>

        </div>
        
    )
}
    
export default Detail;
