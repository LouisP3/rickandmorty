import {useState, createContext} from 'react'


// create blank context
export const UserContext = createContext();
// assign a value
// provide value to children
export default function UserContextProvider(props){
    //create my global state
    const [userName, setUserName] = useState("Louis")

    return(
        <UserContext.Provider value={{userName,setUserName}}>
            {props.children}

        </UserContext.Provider>
    )
}