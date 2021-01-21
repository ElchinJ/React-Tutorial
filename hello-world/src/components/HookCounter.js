import React, { Component, useState } from 'react'

// -- Check Counter.js file to see how class component works.


// -- Now we use Hook. We create function component. Create variable [count, setCount] to useState() hook. OBS! With Hooks we do not use 'this' keyword
function HookCounter() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    // -- Hooks using object example:
    const [name, setName] = useState({ firstName: '', lastName: '' })
    // --- Hooks using arrays:
    const [items, setItems] = useState([])
    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    
    return (
        <div>
            <p><u><b>Implementation of Hooks</b></u></p>
            Count: {count} <br></br>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            {/* To make it safer to implement use like this: */}
            {/* <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button> */}

            {/* Hooks with objects */}
            <form>
                <h6>Hooks with objects</h6>
                <input type='text' value={name.firstName} onChange={ e => setName({ ...name, firstName: e.target.value})} placeholder='write your first name'/>
                <input type='text' value={name.lastName} onChange={ e => setName({ ...name, lastName: e.target.value})} placeholder='write your last name'/>
                <h4>Your first name is {name.firstName}</h4>
                <h4>Your last name is { name.lastName}</h4>
            </form>

            <h5>Array hooks</h5> 
            <button onClick={addItem}>Add an item to array</button>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>{ item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HookCounter

