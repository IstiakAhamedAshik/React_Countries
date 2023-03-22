import React from 'react'
import './country.css'

const Search = (props) => {
  const findcountry = (e) => {
    const findName = e.target.value
    props.searchCountry(findName)
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <input
        onChange={findcountry}
        className='input'
        type='text'
        placeholder='Search country'
      />
    </div>
  )
}

export default Search
