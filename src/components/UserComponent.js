import React ,{ Component} from 'react'




const UserContext =React.createContext('Diana')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer


export {UserProvider, UserConsumer}

