import React, { useState, useEffect } from 'react'

function UseEffectDemo() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    
    // -- Check out the [] array in the useEffect hook. There is [count] which means only count property will affect changes to run update. If we remove array then in console.log() we will see updated effect when we make changes on input field also
    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `You clicked ${count} times`
    }, [count]);

        return (
            <div>
                <h5>useEffect Hooks</h5>
                <input type='text' value={name} onChange={e => setName(e.target.value)} />
                <button onClick={() => setCount(count + 1 )}>
                    Click {count} times
                </button>
            </div>
        )
}

export default UseEffectDemo
