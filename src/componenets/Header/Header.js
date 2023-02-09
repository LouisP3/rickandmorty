import React, {useContext} from 'react'
import { UserContext } from '../../Contexts/UserContext'
import './Header.css'
import { ThemeContext } from '../../Contexts/ThemeContext'


function Header() {
//extract values from global context
// note use {} not []
  const{userName, setUserName} = useContext(UserContext)
  const{darkMode, setDarkMode} = useContext(ThemeContext)
  console.log(userName)

  const handleTheme= () =>{
    setDarkMode(!darkMode)
  //save in local storage
  localStorage.setItem("darkMode", !darkMode)
  }
  return (
    <div className={darkMode?"headercontainer header-dark" : "headercontainer"}>
        <div className="headerlinks">
            <a href="/">Home</a>
            <a href="/about">About</a>
        </div>
        <div className='message'>
          <p>Welcome {userName}!</p>
          <button onClick={handleTheme}>{darkMode?"Light Mode" : "Dark Mode"}</button>
        </div>

    </div>
  )
}

export default Header
