import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import {
  BrowserRouter,
  Link,
  useParams,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <div className="App">
      <Route exact path="/" component={Main}></Route>
      <Route exact path="/:id" component={Detail}></Route>
      <Route exact path="/product/:id/edit" component={Update}></Route>
    </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
