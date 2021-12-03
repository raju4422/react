import React,{ Component } from 'react';


class Hello extends Component{

    constructor(props){
        super(props)
        this.state={
            message:"this is state message",
            'user':"this is pranay"
        }
        // approach 3
        this.changeState3=this.changeState3.bind(this);
    }

     changeState1(){
       this.setState({message:" this is modified state"})
    }

    changeState2(){
        this.setState({message:" this is modified state"})
     }
    changeState3(){
        this.setState({message:" this is modified state"})
     }
    changeState4=()=>{
        this.setState({message:" this is modified state"})
     }

    // changeState1(){
    //     this.setState((prevState)=>({'message1':prevState.message}))
    //         }
    render() {
        const {name,email}=this.props;
        const {message,user}=this.state;
        return (
            <div>

                <h1>{message}-{user}-{this.state.message1}</h1>
                
                <h1>{name}-{email}-{user} </h1>
                <button onClick={()=>this.changeState1()}>subscribe</button>
                  {/* approach 2 */}
                <button onClick={this.changeState2.bind(this)}>subscribe</button>

                 {/* approach 3 */}
                 <button onClick={this.changeState3}>subscribe</button>
                
                    {/* approach 4 */}
                 <button onClick={this.changeState4}>subscribe1</button> 
            </div>
        )
    }
}
export default Hello