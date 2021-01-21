import React from 'react'

function functionClick() {
    // in function component we use function keyword to define a function 
    function clickHandler() {
        console.log("Button clicked")
    }
    return (
        <div>
            {/* OBS! onClick is function but not function call. We do not use clickHandler() !!! */}
            <button onClick={clickHandler}>Click me</button>
        </div>
    )
}

export default functionClick
