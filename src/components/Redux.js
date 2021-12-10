import axios from 'axios';
import React, {useEffect}from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {setProducts } from '../state/actions/productActions'
   

function Redux(){
    const dispatch = useDispatch();
    const fetchProducts= async ()=>{
      const response = await axios.get('https://fakestoreapi.com/products').catch((error)=>{
          console.log('error is ',error);
      })
      dispatch(setProducts(response.data));
    }
    useEffect(() => {
        fetchProducts();
       
    }, [])
	return(

         <div> 
         <section className="">
             REDUX
             <br/>
       </section>

         </div>
         

		)
}
export default Redux;