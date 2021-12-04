
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import About from '../components/About';
    import Home from '../components/Home';

  
  import Users from '../components/Users';
  import Edit from '../components/Edit'

  import {useState,useEffect,useContext} from 'react'
  import {ThemeContext} from '../App'


function NavComponent() {
  const theme = React.useContext(ThemeContext);


    return (
        <Router>
      <div className="">
          



        <nav className="navbar navbar-expand-sm bg-dark ">
         <div className="row">
         <div className="col-md-4"><h1 className="text-white">REACT</h1></div>
         <div className="col-md-8">
          <ul className="nav_bar navbar-nav " style={{listStyle:'none',width:'100%'}}>
            <li className="nav-item">
              <Link  className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Add</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">Users</Link>
            </li>
            <li>{theme}</li>
          </ul>
          </div>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/" exact component={Home}>
          </Route>
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
