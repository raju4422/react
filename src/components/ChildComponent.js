
import React from 'react';
import './Custom.css'

function ChildComponent(props){
    console.log(props.event)

    let data=['hello','hi','welcome']

   // var result=data.map(res=>)

 
        return (
            <div>
                {/* <button onClick={()=>props.event('child')}>click me here</button> */}
                <div>

                <ul>{data.map((res,index)=><li key={index}>{res}</li>)}</ul>


                </div>
            </div>
        )
    
}
export default  ChildComponent