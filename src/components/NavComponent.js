
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


       <nav className="navbar navbar-expand-lg navStyle">
            <Link className="brand-navbar" to="/"><img src="https://miro.medium.com/max/282/1*JSFjofdjIH5RDVf-qOODGw.png" alt="Responsive image" height="60px"/></Link>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#mainMenu">
                <span><i className="fas fa-align-right iconStyle"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="mainMenu">
                <ul className="navbar-nav ml-auto navList">
                    <li className="nav-item active"><Link to="/" className="nav-link"><i className="fas fa-home"></i>HOME<span className="sr-only">(current)</span></Link></li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link"><i className="fas fa-cogs"></i>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link"><i className="fas fa-briefcase"></i>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/users" className="nav-link"><i className="fas fa-phone"></i>Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link"><i className="fas fa-users"></i>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
          



     {/*   <nav className="navbar navbar-expand-sm bg-dark ">
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
*/}
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
