import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PetList from '../components/PetList';
import {Link} from 'react-router-dom';

const Main = (props) => {
    const [pet, setPet] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pet')
            .then(res=>{
                setPet(res.data);
            })
            .catch(err => console.error(err));
    },[]);

const removeFromDom = petId => {
    setPet(pet.filter(pet => pet._id != petId));
}

    return (
        <div>
        <Link to="new/pet">Add a pet to the shelter</Link>
           <hr/>
           {<PetList pet={pet} removeFromDom={removeFromDom}/>}
        </div>
    )
}
    
export default Main;