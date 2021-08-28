//import logo from './logo.svg';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import HomeScreen from './Components/Homescreen/HomeScreen';
import LoginScreen from './Components/Loginscreen/LoginScreen'

function App() {
  
  const user = null;


  return (
    <div className="app"> 
      <Router>
          {!user ? 
          (<LoginScreen />)
          :
          ( <Switch>
              <Route exact path = '/'>
                <HomeScreen />
              </Route>
            </Switch>
            )
          }
      </Router>
    </div>
  ); 
}

export default App;
