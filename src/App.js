import './App.css';
import Login from './components/Login';
import  Register from "./components/Register";
import  Dashboard from "./components/Dashboard";
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import {Provider} from 'react-redux'
import store from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar/>
            <Switch>
              <Route exact path="/">
                <Login/>
              </Route>
              <Route exact path="/register">
                <Register/>
              </Route>
              <Route exact path="/dashboard">
                <Dashboard/>
              </Route>
            </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
