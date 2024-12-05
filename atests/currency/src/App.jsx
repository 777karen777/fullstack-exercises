import { useState, useEffect } from "react";
import axios from 'axios'

const App = () => {
  const [value, setValue] = useState('')
  const [rates, setRates] = useState({})
  const [currency, setCurrency] = useState(null)

  useEffect(() => {
    console.log('effect run, currency is now', currency);

    if(currency) {
      console.log('fetching exchange rates...');
      axios
        .get(`https://open.er-api.com/v6/latest/${currency}`)
        .then(response => {
          console.log(response);
          
          setRates(response.data.rates)
        })      
    }    
  }, [currency])

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const onSearch = (event) => {
    event.preventDefault()
    setCurrency(value)
  }

  const st = {
    
      backgroundColor: '#f4f4f4', /* Light gray background */
      padding: 10,            /* Add padding */
      borderRadius: 5,       /* Rounded corners */
      fontFamily: 'monospace',   /* Monospace font */
      overflowX: 'auto'         /* Horizontal scrolling for long text */
    
    
  }

  return (
    <div>
      <form onSubmit={onSearch}>
        currency: <input value={value} onChange={handleChange} />
        <button type="submit">exchange rate</button>
      </form>
      <pre style={st}>
        {JSON.stringify(rates, null, 2)}
      </pre>
    </div>
  )
}

export default App