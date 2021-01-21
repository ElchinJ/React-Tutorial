import React, { Component } from 'react'
import UserContext from './UserContext'
import ComponentC from './ComponentC'

class ComponentB extends Component {
static contextType = UserContext

    render() {
        return (
            <div>
                Component B context {this.context}
                <ComponentC />
            </div>
        )
    }
}

export default ComponentB
