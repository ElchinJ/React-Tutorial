import React from 'react'

// -- This components goal is to provide property into the child component through its parent components. In out case we want to pass parameter into ComponentC
const UserContext = React.createContext('Guest')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext