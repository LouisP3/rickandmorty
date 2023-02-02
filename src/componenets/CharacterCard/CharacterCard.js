import React from 'react'
import './CharacterCard.css'

function CharacterCard({character}) {
  return (
    <div className="charactercard">
        <img src={character.image} />
        <p>{character.name}</p>
        <button>see details</button>
    </div>
  )
}

export default CharacterCard