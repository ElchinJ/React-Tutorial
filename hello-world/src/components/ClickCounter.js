import React, { Component } from 'react'

class ClickCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            hoverCount: 0,
            clickCount: 0
        }
    }

    incrementCountHover = () => {
        this.setState(prevState => {
            return {hoverCount: prevState.hoverCount + 1}
        })
    }
    incrementCountClick = () => {
        this.setState(prevState => {
            return {clickCount: prevState.clickCount + 1}
        })
    }
    
    render() {
        const { hoverCount } = this.state 
        const {clickCount} = this.state
        return <div>
            <button onMouseOver={this.incrementCountHover}>Moused over {hoverCount} times</button>
            <button onClick={this.incrementCountClick}>Clicked {clickCount} times</button>
            </div>
    }
}

export default ClickCounter
