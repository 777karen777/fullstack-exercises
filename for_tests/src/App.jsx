import { useState, useEffect } from "react"
import axios from 'axios'
import Note from "./components/Note"
import Notification from "./components/Notification"
import noteService from "./services/notes"


const Footer = () => {
  const footerstile = {
    color: 'green',
    fontStile: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerstile}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2024</em>

    </div>
  )
}

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const toggleImportanceOf = (id) => {
    // const url = `http://localhost:3001/notes/${id}`
    const noteToChange = notes.find(n => n.id === id)
    const changedNote = {...noteToChange, important: !noteToChange.important}

    // axios.put(url, changedNote)
    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(n => n.id === id ? returnedNote : n))
      })
      .catch(error => {
        setErrorMessage(
          `Note '${noteToChange.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
        // console.log(error)
      })
    console.log(`importance of  ${id} needs to be toggled`)
  }  

  const hook = () => {
    // console.log('effect'); 
    noteService
      .getAll()
      .then(initialNotes => {
        // console.log('promise fulfilled');
        setNotes(initialNotes)
      })
  }
  useEffect(hook, [])
  // console.log('render', notes.length, 'notes');
  


  const handleNoteChange = (event) => {
    // console.log(event.target)
    setNewNote(event.target.value) 

 
  }
  
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      // id: String(notes.length + 1),
    }

    // axios
    noteService
      .create(noteObject)
      // .post('http://localhost:3001/notes', noteObject)
      .then(adedNote => {
        setNotes(notes.concat(adedNote))
        setNewNote('')
        // console.log(adedNote)
      })

  }
  // console.log(notes);    

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage}/>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => 
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        )}        
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  )
}

export default App