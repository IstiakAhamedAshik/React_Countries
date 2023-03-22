import React from 'react'
import './country.css'
const Country = (props) => {
  const { name, capital, area, population, flags } = props.country
  return (
    <div className='single-country'>
      <div style={{ width: '300px', height: '220px', margin: '0 auto' }}>
        <img style={{ width: '100%', height: '100%' }} src={flags.png} alt='' />
      </div>

      <div className='info-country'>
        <h2>Name : {name.common}</h2>
        <h3>Capital : {capital}</h3>
        <h5>Area : {area}</h5>
        <h5>Populatin : {population}</h5>
        <button className='btn'>Remove Country</button>
      </div>
    </div>
  )
}

export default Country
