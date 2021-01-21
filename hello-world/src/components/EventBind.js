import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
    }
    
    sayGoodbye() {
        this.setState({ message: 'Goodbye now' }); 
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={() => this.sayGoodbye()}>Click to say goodbye</button>
            </div>
        )
    }
}

export default EventBind
