import { useEffect, useState } from 'react'
import Country from './components/Country'
import { v4 as uuidv4 } from 'uuid'
import './components/country.css'
const url = 'https://restcountries.com/v3.1/all'

function App() {
  const [loding, setLoding] = useState(true)
  const [error, setError] = useState(null)
  const [countries, setCountries] = useState([])

  const fetchData = async (url) => {
    setLoding(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setCountries(data)
      setLoding(false)
      setError(null)
      console.log(data)
    } catch (error) {
      setLoding(false)
      setError(error)
    }
  }
  useEffect(() => {
    fetchData(url)
  }, [])
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'rgb(32, 216, 69)' }}>
        WROLD COUNTRIES
      </h1>
      {loding && <h4>Data is Loding....</h4>}
      {error && error.message}
      <div className='all-countries'>
        {countries &&
          countries.map((country) => {
            const countryNew = { country, id: uuidv4() }
            return <Country {...countryNew} key={countryNew.id}></Country>
          })}
      </div>
    </div>
  )
}

export default App
