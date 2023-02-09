import React, {useState, createContext} from 'react'


// create blank context
export const ThemeContext = createContext();
// assign a value
// provide value to children
export default function ThemeContextProvider(props){
    //create my global state
    const [darkMode, setDarkMode] = useState(false)
    React.useEffect(
        ()=>{
            const theme = localStorage.getItem("darkMode")
            if(theme != null){
                //all values in local Storage are stored as string
                setDarkMode(JSON.parse(theme))
            }


        }, []
    )

    return(
        <ThemeContext.Provider value={{darkMode,setDarkMode}}>
            {props.children}

        </ThemeContext.Provider>
    )
}