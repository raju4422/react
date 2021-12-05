import React,{useState} from 'react';
import HookComponent from '../components/HookComponent';
import Users from '../components/Users';



const layerStyles={
  width:'100%',
  height:'100%',
   backgroundColor: "black",
   opacity:'0.5',
   textAlign:'center',
   zIndex:'100',


}

function About() {

const [effect,setEffect]=useState(false);
  const layer = (value) => {
    setEffect(true)

     const timer = setTimeout(() => {
     setEffect(false)
  }, 1000);

}

    return (
        <div className="position-relative">
             {effect ? <div className="layer position-absolute" style={layerStyles}><h1 className="text-white">Loading...</h1> </div>: null }
            <div  className="container ">
            
                
                <div className="row">

                <div className="col-md-6">
                    <h1>Add the User</h1>
                <HookComponent layer={layer}/>
                </div>
                <div className="col-md-6">
                <Users/>
                </div>
                </div>
            </div>
            

        </div>
    )
}

export default About