
import React,{ Component }from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
        this.state={
            username:''
        }
    }

    changeUsername=(event)=>{
        this.setState({username:event.target.value});
    }



    render() {
        return (
            <div>
                <form>
                    <input type="text" className="form" value={this.state.username} onChange={this.changeUsername}/>
                    <br/>

                    <label>{this.state.username}</label>
                    {/* <input type="text"  value={this.state.username} /> */}
                </form>
            </div>
        )
    }


}
export default Form