import logo from './logo.svg';
import './App.css';
import Greet  from './components/Greet';
import Hello from './components/Hello'
import ParentComponent from './components/ParentComponent'
import Form from './components/Form';
import {UserProvider} from './components/UserComponent';
import ComponentA from './components/ComponentA';
import GetdataComponent from './components/GetdataComponent';
import HookComponent from './components/HookComponent'
import NavComponent from './components/NavComponent'
import BodyComponent from './components/BodyComponent'
import React,{useState,useEffect,createContext} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';

import  {CustomContext}  from './contexts/ContextProvider';

export const ThemeContext = createContext();
export const ThemeContext2 = createContext();


function App() {

  const [isActive, setIsActive]=useState(0);
  
useEffect(()=>{

  axios.get(`http://localhost/react/reactPhp/index.php/home/session`).then(res=>{
           
        setIsActive(res.data);
        
            
        })

},[])

  return (
    <div className="App">
{/*<ThemeContext.Provider value={isActive}>
<CustomContext.Provider value="Rhoney">

<NavComponent/>
<BodyComponent/>
</CustomContext.Provider>

</ThemeContext.Provider>*/}


{/* <HookComponent/> */}
 

     {/* <UserProvider value ="Raju"> */}

       {/* <ComponentA/> */}
     {/* </UserProvider > */}
      {/* <Form/> */}
      {/* <ParentComponent/> */}
        {/* <Greet name="raju"/> */}
        {/* <Hello name="hello" email="raju@gmail.com"></Hello> */}
    </div>
  );
}

export default App;
