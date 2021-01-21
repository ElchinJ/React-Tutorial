import React from 'react';

// -- example function using JSX --
// const Hello = () => {
//     return (
//         <div className='dummyClass'>
//             <h2>arrow function with JSX example</h2>
//         </div>
//     )
// }

// -- example function without using JSX --
const Hello = () => {
    return React.createElement('div', {className: 'dummyClass'}, React.createElement('h1', null, 'example using without JSX'))
}

export default Hello;
