import React from 'react'
import './CharacterCard.css'
import {Link} from 'react-router-dom'

function CharacterCard({character}) {
  return (
    <div className="charactercard">
        <img src={character.image} />
        <p>{character.name}</p>
        <Link to={`/details/${character.id}`}>
        <button>see details</button>
        </Link>
    </div>
  )
}

export default CharacterCard