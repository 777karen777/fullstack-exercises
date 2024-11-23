const Person = ({person, deletePerson}) => {
    return (
      <li>
        {person.name} {person.number} <button onClick={() => deletePerson(person.name, person.id)}>delete</button>
      </li>
    )
}

export default Person