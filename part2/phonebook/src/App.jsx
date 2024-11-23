import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import contactService from './services/contacts'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    contactService
      .getAll()
      .then(response => {
        setPersons(response)        
      })
    }, []
  )
  // console.log("hi from effect");

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
    const personIndex = persons.findIndex(person => person.name === newName)
    // const numberIndex = persons.findIndex(person => person.number === newNumber)

    // console.log(personIndex);
    if(personIndex !== -1) {
      if(persons[personIndex].number === newNumber)
        alert(`${newName} is already added to phonebook`)
      else {
        const result = confirm(`${persons[personIndex].name} is already added to phonebook, replace the old number with a new one?`)
        if (result) {
          const updatedPerson = {...persons[personIndex], number: newNumber }
          contactService
            .updateNumber(updatedPerson)
            .then(updated => {
              setPersons(persons.map(person => person.id === updated.id ? updated : person))
              setNewName('')
              setNewNumber('')
            })
        }
      }
    }
    else {
      const newPerson = {name: newName, number: newNumber}
      contactService
        .addContact(newPerson)
        .then(newContact => {
          setPersons(persons.concat(newContact))
          // console.log(persons)
          setNewName('')
          setNewNumber('')
        })
      // const newPersons = persons.concat(newPerson)
      // setPersons(newPersons)
    }    
  }

  const deletePerson = (name, id) => {
    const result = confirm(`Delete ${name}`)
    if(result) {
      contactService
        .deleteContact(id)
        .then(deleted => {
          setPersons(persons.filter(person => {
            return person.id !== deleted.id
          }))
          // console.log(persons)
        })
        .catch((error) => console.log('Operation failed!')
        )
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

      <Persons persons={persons} search={search} deletePerson={deletePerson} />
      
    </div>
  )
}

export default App