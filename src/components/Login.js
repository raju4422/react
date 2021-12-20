import React,{useState} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux'


function Login(){
  const dispatch = useDispatch();
  const session = useSelector(state => state.session.session.response);
  
 console.log('login_response',session)

  const { register, handleSubmit, formState: { errors },reset } = useForm();
  
  const form_error={
    color:'red',
    textAlign:'left'
  }

  const submit =  (data)=>{
     axios.post('http://localhost/react/reactPhp/index.php/home/authenticate',{
      email:data.email,
      password:data.password
    }).then((res)=>{
     // console.log(res);
      dispatch({type:'SET_USER',payload:res.data.session_data});


    })


  

  }

	return(

         <div> 
         <section className="">
         <div className="modal fade" id="modalLoginForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
          aria-hidden="true">
        <form onSubmit={handleSubmit(submit)}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body mx-3">
                <div className="md-form mb-5">
                  <i className="fas fa-envelope prefix grey-text"></i>
                  <input type="email" id="defaultForm-email" className="form-control validate" {...register("email", { required: 'Email Field is required' })} placeholder="Enter Email Address"/>
                  <div className="text-left">{errors.email && <span style={form_error}>{errors.email.message}</span>}</div>

                </div>

                <div className="md-form mb-4">
                  <i className="fas fa-lock prefix grey-text"></i>
                  <input type="password" id="defaultForm-pass" {...register("password", { required: 'Password Field is required' })} className="form-control validate" placeholder="Enter Password"/>
                  <div className="text-left">{errors.password && <span style={form_error}>{errors.password.message}</span>}</div>

                </div>

              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button  type="submit"  className="btn btn-default">Login</button>
              </div>

             

            </div>
          </div>
          </form>
        </div>



         </section>

         </div>
         

		)
}
export default Login;