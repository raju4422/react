import './App.css';

import React,{useState,createContext} from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/includes/Header';
import Footer from './components/includes/Footer';



export const ThemeContext = createContext();


function App() {

  const state = useSelector((state)=>state);
   console.log(state);
  const [isLoggedIn, setIsLoggedIn]=useState(false)


  return (
    <div className="App">

    <ThemeContext.Provider value={isLoggedIn}>
      <Header/>
      <Footer/>
  </ThemeContext.Provider>

    </div>
  );
}

export default App;
