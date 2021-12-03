import React from 'react';
import HookComponent from '../components/HookComponent';
import Users from '../components/Users';


function About() {
    return (
        <div>
            
            <div  className="container">
                <div className="">
                <div className="row">

                <div className="col-md-6">
                    <h1>Add the User</h1>
                <HookComponent/>
                </div>
                <div className="col-md-6">
                <Users/>
                </div>
                </div>
                </div>
            </div>
            

        </div>
    )
}

export default About
