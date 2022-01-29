import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import errorpic from './assets/obi-wan-kenobi-star-wars.gif';

const People = (props) => {
  const [char, setChar] = useState({});
  const [home, setHome] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/" + id + "/?format=json")
      .then((response) => {
        setChar(response.data);
      })
      .catch(err => {
        console.error(err);
        setChar({error: "These are not the droids you are looking for"})
      });
  }, [id]);

  useEffect(() => {
    axios.get(char.homeworld).then((response) => {
      setHome(response.data.name);
    });
  });

  console.log(char);

  return (
    char.error ? 
    <div>
    <h1>{char.error}</h1>
    <img src={errorpic} alt="obi wan"/>
    </div> :
    <div>
      <h4>{char.name}</h4>
      <br />
      <p>Home World: {home}</p>
      <p>
        Home World Info: <a href={char.homeworld}target="_blank" >Homeworld</a>
      </p>
      <p>Height: {char.height}cm</p>
      <p>Mass: {char.mass}kg</p>
      <p>Hair Color: {char.hair_color}</p>
      <p>Skin Color: {char.skin_color}</p>
    </div>
  );
};
export default People;