import { useState, useEffect } from "react"
import axios from 'axios'
import Note from "./components/Note"

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)


    //   //
    // setTimeout(() => {
    //   console.log('loop..')
    //   let i = 0
    //   while (i < 50000000000) {
    //     i++
    //   }
    //   console.log('end')
    // }, 5000)
    // //  

  const hook = () => {
    console.log('effect');
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled');
        setNotes(response.data)
      })
  }
  useEffect(hook, [])
  console.log('render', notes.length, 'notes');
  


  const handleNoteChange = (event) => {
    // console.log(event.target)
    setNewNote(event.target.value) 

 
  }
  
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }
  // console.log(notes);    

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => 
          <Note key={note.id} note={note} />
        )}        
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App