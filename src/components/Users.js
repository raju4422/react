import React, {useState,useEffect, useMemo} from 'react'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,useHistory , useParams
  } from "react-router-dom";
  import Edit from '../components/Edit'
  import { useSelector } from 'react-redux';
  import {useDispatch} from 'react-redux'
  import {getUsers} from '../state/actions/productActions'



  
function Users() {
    
    const dispatch = useDispatch();
    const [result,setResult]=useState([]);


    function deleteUser(e,id){
        e.preventDefault();
       
        if(window.confirm('Are you sure you want to delete')){
           axios.delete(`http://localhost/react/reactPhp/index.php/home/delete_user/${id}`).then(res=>{
              // console.log(res);
             // hist.push('/')
             getUsersData();
           })

        }

    }
    useEffect(() => {
        getUsersData();
       
    }, [])
    

    const getUsersData = async ()=>{
        
        const response = await axios.get('http://localhost/react/reactPhp/index.php/home/get_data').catch((error)=>{
            console.log(error);
        })

        dispatch({type:'GET_USERS',payload:response.data});

    } 

    const users_data = useSelector((state)=>state.users.users);



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
            {users_data.map(tool=>(<tr key={tool.id}><td>{tool.name}</td><td>{tool.email}</td><td><Link to={{pathname: `/edit/${tool.id}`}}>Edit</Link> &nbsp; &nbsp; <a href="#" onClick={(e)=>deleteUser(e,tool.id)}> delete</a></td></tr>))}
            </tbody>  
            </table>
           
           
        </div>
    )
}

export default Users
