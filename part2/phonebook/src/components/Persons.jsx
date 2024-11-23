import Person from "./Person"
const Persons = ({persons, search, deletePerson}) => {
    
    const personsToShow = persons.filter(person => {
    return (
        person.name.toLowerCase().includes(search.toLowerCase())
    )
    })

    return (
      <div>
        <ul>
          {personsToShow.map((person) => 
            <Person
              key={person.name}
              person={person}
              deletePerson={deletePerson}
            />)}
        </ul>
      </div>
    )
}

export default Persons