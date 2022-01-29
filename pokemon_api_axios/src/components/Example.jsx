import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Example = (props) => {
    const [people, setPeople] = useState([]);
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createSubmission = (e) => {
        e.preventDefault();
        setHasBeenSubmitted( true );
        console.log("test");
    };


    useEffect(() => {
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {setPeople(response.data.results)})
    }, []);
 
    return (
        <div>
        <form onSubmit={(e) => createSubmission(e)}>
            <input type="submit" value="Fetch Pokemon" />
        </form>
        {hasBeenSubmitted ? people.length > 0 && people.map((person, index)=>{
            return (<div key={index}>{person.name}</div>)
        }): ''}
        </div>
    );
}
export default Example;