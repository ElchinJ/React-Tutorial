import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentC extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username) => {
                        return <div>Hello user { username}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentC
