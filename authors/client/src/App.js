import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import New from './views/New';
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
      <Route exact path="/new/author" component={New}></Route>
      <Route exact path="/:id" component={Update}></Route>
      <Route exact path="/author/:id/edit" component={Update}></Route>
    </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
