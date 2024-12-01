import { useState, useEffect } from "react"
import axios from 'axios'
import Countries from "./components/Countries"

const App = () => {

  const [value, setValue] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])
  const [notification, setNotification] = useState(null)
  const [matches, setMatches] = useState([])


  const handleChange = (event) => {
    const newVal = event.target.value
    setValue(newVal)
    const foundCountries = allCountries.filter(country => {
      // console.log(country.name.official);
      return (
        country.name.official.toLowerCase().includes(newVal.toLowerCase())
    )})
    const len = foundCountries.length
    // console.log(foundCountries)

    if(len === 0) {
      setNotification(`No match, specify another filter`)
    } else if(len > 9) {
      setNotification(`Too many matches, specify another filter`)
    } else {
      setNotification(null)
      // console.log('I am here')
      
      setMatches(foundCountries)
    }
    // console.log(matchesNames)
    

    // setCountriesToShow(foundCountries )
      
  }
  // console.log(value)
  // console.log(import.meta.env.SSR)
  // console.log(import.meta.env.SSR)

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all/`)
      .then(response => {
        // console.log(response.data);
        setAllCountries(response.data)
      })
  }, [])


  return (
    <div>
      <div>
        find countries <input onChange={handleChange} />
      </div>

      <Countries notification={notification} countries={matches} />
    </div>
  )
}

export default App