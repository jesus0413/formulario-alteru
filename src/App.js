import Navbar from './components/Navbar/index';
import {Register} from './pages/Register/index';
import {Homepages} from './pages/Homepages/index';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar/>  
        <div className="pages">
        <Switch>                 
           <Route exact  path="/Homepages" component={Homepages}>
            <Homepages/>
          </Route> 
          <Route path="/register" component={Register}>
            <Register/>
          </Route> 
        </Switch>
        </div>          
           
      </Router> 
    </div>
  );
}

export default App;

