import React, { useEffect, useState } from 'react'
import './country.css'

const Search = (props) => {
  const [searchtext, setSearchtext] = useState('')
  const findcountry = (e) => {
    setSearchtext(e.target.value)
  }

  useEffect(() => {
    props.searchCountry(searchtext)
  }, [searchtext])
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
