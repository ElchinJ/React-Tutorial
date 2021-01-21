import React from 'react';

// -- simple stateless function component -- 
// function Greet() {
//     return <h1>stateless function component</h1>
// }

// -- arrow function -- 
const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h3>Arrow function component for {props.name} who is a {props.amplua}</h3>
            {props.children}
        </div>
    )
}
// props uses without 'this' keyword in function component
// but we use thsi.props in class components

export default Greet;