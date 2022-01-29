import './App.css';
import {
  Switch,
  BrowserRouter,
  Route,
  Link 
} from "react-router-dom";
import { useParams } from "react-router";

const Home = (props) => {
  return (
    <h1 style={{color: "red"}}>Welcome</h1>
  );
}

const InterchangeNumStri = (props) => {
  const {givenVar} = useParams();
  if(!isNaN(parseInt(givenVar)))
  {
    console.log(`${givenVar}`)
    return (
      <h1 style={{color: "blue"}}>The number is: {givenVar}</h1>
    );
  }
  else{
    return (
      <h1 style={{color: "red"}}>The word is: {givenVar}</h1>
    );
  }
}

const InterchangeNumStriTB = (props) => {
  const {givenVarTB} = useParams();
  const {givenTextC} = useParams();
  const {givenBackC} = useParams();
  if(!isNaN(parseInt(givenVarTB)))
  {
    console.log(`${givenTextC}`)
    return (
      <h1 style={{color: `${givenTextC}`, background: `${givenBackC}`}}>The number is: {givenVarTB}</h1>
    );
  }
  else{
    console.log("hello")
    return (
      <h1 style={{color: `${givenTextC}`, background: `${givenBackC}`}}>The word is: {givenVarTB}</h1>
    );
  }
}

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div>
        <Link to="/home">Home </Link>
          | 
        <Link to="/5"> Number Example</Link>
          | 
        <Link to="/hello"> Word Example</Link>   
      </div>
      <Switch>
      <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/:givenVar">
          <InterchangeNumStri />
        </Route>
        <Route exact path="/:givenVarTB/:givenTextC/:givenBackC">
          <InterchangeNumStriTB />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
