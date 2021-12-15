
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import About from '../components/About';
import Home from '../components/Home';
import Login from '../components/Login';
import Users from '../components/Users';
import Edit from '../components/Edit';
import ReducerFunction from '../components/ReducerFunction'


import {useState,useEffect,useContext} from 'react'
import {ThemeContext} from '../App'
import Redux from './Redux';



function NavComponent() {

const [modal,setModal]=useState(false);  
const Theme = React.useContext(ThemeContext);

const activeChange=(e)=>{
console.log(e.target);
  }
  console.log(modal);

    return (
        <Router>
      <div className="">

       <nav className="navbar navbar-expand-lg navStyle">
            <Link className="brand-navbar" to="/"><img src="https://miro.medium.com/max/282/1*JSFjofdjIH5RDVf-qOODGw.png" alt="Responsive image" height="60px"/></Link>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#mainMenu">
                <span><i className="fas fa-align-right iconStyle"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="mainMenu">
                <ul className="navbar-nav ml-auto navList">
                    <li className="nav-item active"><Link to="/" className="nav-link"><i className="fas fa-home"></i>HOME<span className="sr-only">(current)</span></Link></li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" ><i className="fas fa-cogs"></i>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" ><i className="fas fa-briefcase"></i>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/users" className="nav-link" ><i className="fas fa-phone"></i>Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" ><i className="fas fa-users"></i>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/useReducer" className="nav-link" ><i className="fas fa-users"></i>Use Reducer</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/redux" className="nav-link" ><i className="fas fa-users"></i>Redux</Link>
                    </li>
                    {Theme ?  <li>
                      <a href="#" className="nav-link">Logout</a>
                    </li> :  <li>
                      <a  onClick={()=>{setModal(true)}} className="nav-link" data-toggle="modal" data-target="#modalLoginForm">Login</a>
                    </li> }
                   
                </ul>
            </div>
        </nav>
          
   
        <Switch>
        <Route path="/" exact component={Home}>
          </Route>
          <Route path="/about" component={About}>
          </Route>
          <Route path="/users" component={Users}>
           
          </Route>
           <Route path="/login" component={Login}>
           
          </Route>

          <Route path="/edit/:id" component={Edit} />
           <Route path="/useReducer" component={ReducerFunction} />
           <Route path="/redux" component={Redux} />


        
          
        </Switch>
      </div>

      {modal? <Login/> : null}


    </Router>
    )
}

export default NavComponent
