import React from 'react';
import "./Person.css"

const person = (props) => {
    return (
        <div className="Person">
            <p> {props.name} is react developer and my age is {props.age} </p>
            <p>{props.children}</p>
            <p onClick={props.click}>Click Here</p>
            <input type = "text" onChange={props.changed}></input>
        </div>

    );
   
}
export default person;