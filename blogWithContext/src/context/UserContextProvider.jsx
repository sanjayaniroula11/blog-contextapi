import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider=({children})=>{
    const [titles, setTitles] = useState([])
    return (
        <UserContext.Provider value={{titles,setTitles}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider