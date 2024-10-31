import { useState } from 'react'

import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

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

  const personsToShow = persons.filter(person => {
    return (
      person.name.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with: <input value={search} onChange={handleSearch}/>
      <h2>add a new</h2>
      <form  onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {personsToShow.map((person) => 
            <Person
              key={person.name}
              person={person}
            />)}
        </ul>
      </div>
    </div>
  )
}

export default App