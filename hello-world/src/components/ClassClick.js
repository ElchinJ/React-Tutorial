import React, { Component } from 'react'

class ClassClick extends Component {

    // in the class component we do not use function keyword
    clickHandler() {
        console.log("Button clicked again")
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me again</button>
            </div>
        )
    }
}

export default ClassClick
