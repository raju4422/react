import React ,{ Component} from 'react'
import ChildComponent from './ChildComponent'


class ParentComponent extends Component {
    constructor(props) {
        super(props)

            this.generateEvent=this.generateEvent.bind(this);
            this.state={
                parent:"generateEvent"
            }
    }


    generateEvent(child){
        alert('hi ' + this.state.parent+ " " + child);
    }

    render(){
        return (
            <div>
                <ChildComponent event={this.generateEvent}/>
            </div>
        )
    }


}

export default ParentComponent