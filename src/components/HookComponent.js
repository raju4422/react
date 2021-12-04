 import react, {useState}from 'react'
 import axios from 'axios';
 import About from '../components/About'
 import LoadingComponent from '../components/LoadingComponent'
 



 const cors = require('cors')
 

 function HookComponent(props){
     const [data,setData]=useState({name:'',email:'',password:''});
     const [response,setResponse]=useState();
     const [loading,setLoading]=useState(false);

     const [error,setError]=useState({isError:'',name:'',email:'',password:''});

   

     function form_validations(){
      
      if(data.name.trim()==="" || data.email.trim()==="" || data.password===""){
        if(data.name.trim()===""){
          setError({...error,
            isError:'error',
            name:'Name Field is required'
          });

          
        }

        console.log(error)
      }
     
    }
    
     function submit(e) {
       e.preventDefault();
       // form_validations();
       setLoading(true);


      axios.post('http://localhost/react/reactPhp/index.php/home/insert',{
        email:data.email,
        password:data.password,
        name:data.name,
      })
        .then(res => {
          // empty();
          setData({
            name:'',email:'',password:''
          })
         if(res.status==200){
          setResponse('Success...')
          setLoading(false);
         }else{
          setResponse('Failed...');
          setLoading(false);
        
          

         }
        })
      
    }

   

 
        return(
            <div>
              <div className="container loading_cont pt-5">


                {loading ? <LoadingComponent/>:null}
                
               <div  >{response ? <div className="alert alert-success " role="alert">Success...</div>:null}</div>
              <form onSubmit={(e)=>submit(e)} >
                <div className="row pb-1">
                  <div className="col-md-3 col-3 "><label  className="form-label">Email address</label></div>
                  <div className="col-md-9 col-9"><input type="email" value={data.email} className="form-control" onChange={e=>setData({...data,email:e.target.value})}/></div>
                   <small>{error.name}</small>
                </div>
                <div className="row pb-1">
                  <div className="col-md-3 col-3 "><label  className="form-label">Password</label></div>
                  <div className="col-md-9 col-9"><input type="password" value={data.password} className="form-control" onChange={e=>setData({...data,password:e.target.value})}/></div>
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

 export default HookComponent

 