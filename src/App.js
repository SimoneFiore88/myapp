import './App.css';
import Navbar from './components/Navbar'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from './components/Detail';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
      <Navbar />           


        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>                    
        </Switch>



      </Router>

    </div>
  );
}

export default App;
