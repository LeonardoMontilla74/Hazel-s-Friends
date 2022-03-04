import { Route } from "react-router-dom";
import Landing from "./React/Landing";
import Home from './React/Home';
import Details from './React/Details';
import Temperaments from "./React/Temperaments";


function App() {
  return (
    <div>
      <Route exact path='/' component={Landing} />
      <Route path='/dogs' component={Home} />
      <Route path='/details/:idRaza' component={Details} />
      <Route path='/temperaments' component={Temperaments} />
    </div>
  );
}

export default App;
