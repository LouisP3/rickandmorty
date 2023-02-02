import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CharacterCard from '../../componenets/CharacterCard/CharacterCard'
import './Homepage.css'



function Homepage() {
    const[characters, setCharacters] = useState([])


    useEffect(
        ()=>{
            axios.get("https://rickandmortyapi.com/api/character")
            .then(res=>{
                console.log(res.data.results)
                setCharacters(res.data.results)

            })
            .catch(err => console.log(err))


        },[]



    )//end useEffect
    
  return (
    <div className='homecontainer'>
        <h1>Main Characters</h1>
        <div className='characterscontainer'>
        {
            characters.map(item=><CharacterCard character={item}/>)
        }
      {/*{
            characters.map(item=><p>{item.name}</p>
            )
        }  */}</div>
    </div>
  )
}

export default Homepage