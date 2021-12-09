import { useParams } from 'react-router-dom'
import React from 'react'
import { Link } from 'react-router-dom'
const HeroDetails = ({ ParaData }) => {
  return (
    <>
      {ParaData.map((hero, index) => {
        ;<div key={index} className='heroFilter'>
          <h1>{hero.title}</h1>
          <p>{hero.type}</p>
          <Link to={`/heroes/${hero.title}`}>View More</Link>
        </div>
      })}
      <h1></h1>
    </>
  )
}

export default HeroDetails
