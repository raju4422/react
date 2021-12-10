 import react, {useState,useEffect}from 'react'
 import axios from 'axios';
 import About from '../components/About'
 import LoadingComponent from '../components/LoadingComponent'
 import { useForm } from "react-hook-form";
 



 

 function HookComponent(props){
     const [data,setData]=useState({name:'',email:'',password:''});
     const [response,setResponse]=useState(false);
     const [sent ,setSent]=useState(false);
     const { register, handleSubmit, formState: { errors },reset } = useForm();
     

     useEffect(()=>{

     },[sent])
    
     const submit = (data)=> {
      
      axios.post('http://localhost/react/reactPhp/index.php/home/insert',{
        email:data.email,
        password:data.password,
        name:data.name,
      })
        .then(res => {
          reset();
         if(res.status==200){
          setResponse(true)
          setSent(true);
         

         }else{
          setResponse(false);
          setSent('zzdfdf');
           
         }
        })

       
      
    }
    const form_error={
      color:'red',
      textAlign:'left'
    }

   

 
        return(
            <div>
              <div className="container loading_cont pt-5">


               
                
               <div  >{response ? <div className="alert alert-success " role="alert">Success...</div>:null}</div>
           

              <form onSubmit={handleSubmit(submit)} >
                <div className="row pb-1">
                  <div className="col-md-3 col-3 text-right"><label  className="form-label">Email address</label></div>
                  <div className="col-md-9 col-9">
                  <input type="email"  {...register("email", { required: 'Email Field is required' })} className="form-control"  />
                  <div className="text-left">{errors.email && <span style={form_error}>{errors.email.message}</span>}</div>
                  </div>
                        
                  
                </div>
                <div className="row pb-1">
                  <div className="col-md-3 col-3 text-right"><label  className="form-label">Password</label></div>
                  <div className="col-md-9 col-9"><input type="password" {...register("password", { required: 'Password Field is required' })} className="form-control" />
                     <div className="text-left">{errors.password && <span style={form_error}>{errors.password.message}</span>}</div>
                  </div>
                </div>
                <div className="row pb-1">
                  <div className="col-md-3 col-3 text-right"><label  className="form-label">Name</label></div>
                  <div className="col-md-9 col-9"><input type="text"  className="form-control" {...register("name", { required: 'Name Field is required' })}/>
                    <div className="text-left">{errors.name && <span style={form_error}>{errors.name.message}</span>}</div>

                  </div>

                </div>
               
              <div className="" style={{textAlign:'center'}}>
              <button type="submit" onClick = {(e)=>{
                // props.layer(sent)
                console.log(sent)
              
                
              }} className="btn btn-primary btn-lg" >Submit</button>
              </div>
              </form>

              
          </div>
          

            </div>
        )
    
 }

 export default HookComponent

 