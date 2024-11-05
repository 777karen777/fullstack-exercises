import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const result = persons.findIndex(person => person.name === newName)
    console.log(result);
    if(result !== -1) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const newPerson = {name: newName, number: newNumber}
      const newPersons = persons.concat(newPerson)
      setPersons(newPersons)
      setNewName('')
      setNewNumber('')
    }    
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <Filter search={search} handleSearch={handleSearch} />
      
      <h3>add a new</h3>

      <PersonForm
          addPerson={addPerson}
          newName={newName}
          handleNameChange={handleNameChange}
          newNumber={newNumber}
          handleNumberChange={handleNumberChange}        
      />

      <h3>Numbers</h3>

      <Persons persons={persons} search={search} />
      
    </div>
  )
}

export default App