import React, {useState,useEffect, useMemo} from 'react'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,useHistory , useParams
  } from "react-router-dom";
  import Edit from '../components/Edit'


  
function Users() {
    const [result,setResult]=useState([]);

    function deleteUser(e,id){
        e.preventDefault();
       
        if(window.confirm('Are you sure you want to delete')){
           axios.delete(`http://localhost/react/reactPhp/index.php/home/delete_user/${id}`).then(res=>{
              // console.log(res);
             // hist.push('/')
           })

        }

    }
    



    const usersFunction = useMemo(()=>{
        axios.get('http://localhost/react/reactPhp/index.php/home/get_data').then(res=>{
             setResult(res.data);
        })
    },[result])

 

    


    return (
        <div className="container">
            <h1>Users</h1>
            <table className="table table-bordered">
             <thead>
                 <tr>
                 <th>Name</th>
                 <th>Email</th>
                 <th>Action</th>
                 </tr>
            </thead> 
            <tbody>
            {result.map(tool=>(<tr key={tool.id}><td>{tool.name}</td><td>{tool.email}</td><td><Link to={{pathname: `/edit/${tool.id}`}}>Edit</Link> &nbsp; &nbsp; <a href="#" onClick={(e)=>deleteUser(e,tool.id)}> delete</a></td></tr>))}
            </tbody>  
            </table>
           
           
        </div>
    )
}

export default Users
