import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import {Login} from './components/LoginPage';
import FriendsList from './components/FriendsList';
import {AddFriendsList}  from './components/AddFriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/friends'>Friends</Link>
        </li>
        <li>
          <Link to='/addFriends'>Add Friends</Link>
        </li>
      </ul>

      <Switch>
        <PrivateRoute exact path='/friends' component={FriendsList} />
        <PrivateRoute exact path='/addFriends' component={AddFriendsList} />
        <Route path='/login' component={Login} />
        <Route component={Login} />        
      </Switch>    
      
    </div>
    </Router>
  );
}

export default App;
