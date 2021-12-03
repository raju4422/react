import React ,{ Component} from 'react'
import { UserConsumer } from './UserComponent'





class ComponentC extends Component {
    constructor(props) {
        super(props)
    }

render() {
    return (
        <UserConsumer>
            {
                username => {
                    return <div>Hi .. {username}</div>
                }
            }
        </UserConsumer>
    )
}


}
export default ComponentC


