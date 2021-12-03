
import React ,{ Component} from 'react'

import axios from 'axios'


class GetdataComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list_data:[]
        }
    }

    componentDidMount() {
         axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
   console.log(response)
   this.setState({list_data:response.data})
   }).catch(error=>{
       console.log(error)
   })

    }




    render() {
        const {list_data}=this.state
        return (
            <div>{list_data.map(data=>
                <p style={{textAlign:'left'}} key ={data.id}>{data.title}ggg</p>
            )}</div>
        )
    }

   
}

 export default  GetdataComponent
