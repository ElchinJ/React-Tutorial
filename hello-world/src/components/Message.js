import React, {Component} from 'react';

// -- create Message class component
class Message extends Component {
    // create constructor with variable massage='Welcome visito'
    constructor() {
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }

    // onClick event calls changeMessage() function
    changeMessage() {
        this.setState(
            { message: 'Thank you for subscribing' }
        )
    }

    render() { 
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
 
export default Message;