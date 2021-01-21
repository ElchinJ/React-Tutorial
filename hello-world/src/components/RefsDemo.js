import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    
    componentDidMount() {
        // this row of code makes focus on input field after website is refreshing
        this.inputRef.current.focus()
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
        // If we comment out alert and uncomment row 17, then we'll take a focus on text input area by clicking button Click
        //this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                Refs Demo
                <input type='text' ref={this.inputRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
