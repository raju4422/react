
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import About from '../components/About';
  
  import Users from '../components/Users';
  import Edit from '../components/Edit'

  import {useState,useEffect,useContext} from 'react'
  import {ThemeContext} from '../App'


function NavComponent() {
  const theme = React.useContext(ThemeContext);


    return (
        <Router>
      <div className="container">
        <nav>
          <ul className="nav_bar" style={{listStyle:'none',width:'100%',display:'flex'}}>
            <li>
              <Link  to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Add</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>{theme}</li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about" component={About}>
          </Route>
          <Route path="/users" component={Users}>
           
          </Route>

          <Route path="/edit/:id" component={Edit} />


        
          
        </Switch>
      </div>
    </Router>
    )
}

export default NavComponent
