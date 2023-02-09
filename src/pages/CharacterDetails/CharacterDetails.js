import React from 'react'
import './CharacterDetails.css'
import {useParams} from 'react-router-dom'
import axios from 'axios';

function CharacterDetails() {
    //extract id from url, use params is hook
    const {id}= useParams ();
    //create state
    const [character, setCharacter] = React.useState()

    React.useEffect(
        ()=>{
            axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res =>{
                console.log(res.data)
                setCharacter(res.data)

            })
            .catch(err => console.log(err))

        }, []
    )



  return (
    <div className="detailscontainer">
        <img src= {character?.image} />
        <div className="char-info">
        <h3>{character?.name}</h3>
        <ul>
            <li>{character?.gender}</li>
            <li>{character?.species}</li>
            <li>{character?.status}</li>
        </ul>
        </div>
    </div>
  )
}

export default CharacterDetails