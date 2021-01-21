import React from 'react'

// -- Comment functional component
// function ForwardRefInput() {
//     return (
//         <div>
//             <input type='text'/>
//         </div>
//     )
// }

// -- Make arrow function
const ForwardRefInput = React.forwardRef((props, ref) => {
    return (
            <div>
            <input type='text' ref={ ref}/>
            </div>
        )
})

export default ForwardRefInput
