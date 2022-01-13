import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';



function Edit(props) {

    const [data,setData]=useState({id:'',name:'',email:''});
    const [isActive, setIsActive]=useState(0);
    const history = useHistory();

    useEffect(()=>{
        axios.post(`http://localhost:8000/api/get-user/${props.match.params.id}`).then(res=>{
          console.log(res);
        setData({
                id:res.data.id,
                name:res.data.first_name,
                email:res.data.email,

            })
            
        })

        // axios.get(`http://localhost/react/reactPhp/index.php/home/session`).then(res=>{
           
        // setIsActive(res.data);
        // //console.log(res);
            
        // })


        return () => setData([]);

    },[])

    function update(e){
        e.preventDefault();

        //console.log(data);
       axios.post(`http://localhost:8000/api/update`,{
         id:data.id,
         email:data.email,
         first_name:data.name,
       })
         .then(res => {
          if(res.status==200){
            history.push('/about')
           
           console.log('success')
          }else{
           
         
           
 
          }
         })
    }




    return (
        <div>
            <div className="container pt-5">
               <form  onSubmit={(e)=>update(e)}>
               <input type="hidden" value={data.id} className="form-control" />
                 <div className="row pb-1">
                   <div className="col-md-3 col-3 "><label  className="form-label">Email address</label></div>
                   <div className="col-md-9 col-9"><input type="email" value={data.email} className="form-control" onChange={e=>setData({...data,email:e.target.value})}/></div>
                 </div>
                
                 <div className="row pb-1">
                   <div className="col-md-3 col-3 "><label  className="form-label">Name</label></div>
                   <div className="col-md-9 col-9"><input type="text" value={data.name} className="form-control" onChange={e=>setData({...data,name:e.target.value})}/></div>
                 </div>
                
               <div className="" style={{textAlign:'center'}}>
               <button type="submit" className="btn btn-primary btn-lg" >Submit</button>
               </div>
               </form>
 
               
           </div>
        </div>
    )
}

export default Edit
