import React,{useContext} from 'react'
import {ThemeContext,ThemeContext2} from '../App'
import {CustomContext} from '../contexts/ContextProvider'


function BodyComponent() {

    const Theme = useContext(ThemeContext);
    const Theme2 = useContext(ThemeContext2);
    const Theme3 = useContext(CustomContext);


    return (
        <div>
            <h1>This is Body {Theme}- {Theme2}-{Theme3}</h1>
        </div>
    )
}

export default BodyComponent
