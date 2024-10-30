import { useState } from 'react'

import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameCange = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const result = persons.findIndex(person => person.name === newName)
    console.log(result);
    if(result !== -1) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const newPerson = {name: newName}
      const newPersons = persons.concat(newPerson)
      setPersons(newPersons)
      setNewName('')
    }    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form  onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameCange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map((person) => 
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