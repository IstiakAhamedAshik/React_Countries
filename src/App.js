import { useEffect, useState } from 'react'
import Country from './components/Country'
import { v4 as uuidv4 } from 'uuid'
import './components/country.css'
import Search from './components/Search'
const url = 'https://restcountries.com/v3.1/all'

function App() {
  const [loding, setLoding] = useState(true)
  const [error, setError] = useState(null)
  const [countries, setCountries] = useState([])
  const [filtercountries, setFiltercountries] = useState(countries)
  const fetchData = async (url) => {
    setLoding(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setCountries(data)
      setFiltercountries(data)
      setLoding(false)
      setError(null)
    } catch (error) {
      setLoding(false)
      setError(error)
    }
  }
  useEffect(() => {
    fetchData(url)
  }, [])
  const removeCountry = (name) => {
    const getnewCountry = filtercountries.filter(
      (country) => country.name.common !== name
    )
    setFiltercountries(getnewCountry)
  }
  const searchCountry = () => {}

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'rgb(32, 216, 69)' }}>
        WROLD COUNTRIES
      </h1>
      <Search searchCountry={searchCountry}></Search>
      {loding && <h4>Data is Loding....</h4>}
      {error && error.message}
      <div className='all-countries'>
        {filtercountries &&
          filtercountries.map((country) => {
            const countryNew = { country, id: uuidv4() }
            return (
              <Country
                {...countryNew}
                key={countryNew.id}
                removeCntry={removeCountry}
              ></Country>
            )
          })}
      </div>
    </div>
  )
}

export default App
