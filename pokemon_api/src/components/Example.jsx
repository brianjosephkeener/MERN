import React, {useState, useEffect} from 'react';

const Example = (props) => {
    const [people, setPeople] = useState([]);
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createSubmission = (e) => {
        e.preventDefault();
        setHasBeenSubmitted( true );
        console.log("test");
    };


    useEffect(() => {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
            .then(response => response.json())
            .then(response => setPeople(response.results))
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