import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Cities from './component/cities';
import Users from './component/users';
import NavigationBar from './component/navigation';
import User from './component/user';
import City from './component/city';
function App() {
  return (
    <div className="App">
      <header className="App-header">
  
      <BrowserRouter>
      <NavigationBar/>
        <Switch>
        <Route path="/users/" exact>
            <Users/>
          </Route>
          <Route path="/cities/" exact>
            <Cities/>
          </Route>
          <Route path="/cities/:id" exact>
            <City/>
          </Route>
          <Route path="/user/:id">
            <User/>
          </Route>
        </Switch>      
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
