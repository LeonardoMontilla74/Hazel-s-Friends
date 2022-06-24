import { Route } from "react-router-dom";
import Landing from "./React/Landing";
import Home from './React/Home/Home';
import Details from './React/Details';
import Temperaments from "./React/Temperaments";
import Create from "./React/Create";


function App() {
  return (
    <div>
      <Route exact path='/' component={Landing} />
      <Route path='/dogs' component={Home} />
      <Route path='/details/:idRaza' component={Details} />
      <Route path='/temperaments' component={Temperaments} />
      <Route path='/createDog' component={Create} />
    </div>
  );
}

export default App;
