import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const onNameChange = (ev) => {
	setNewName(ev.target.value)
	console.log("New name value", newName)
  }

  const onNameAdded = (ev) => {
	ev.preventDefault()
	setPersons(persons.concat({name: newName}))
	setNewName("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onNameAdded}>
        <div>
          name: <input value={newName} onChange={onNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
	  <ul>
	      {persons.map(person => <p key={person.name}>{person.name}</p>)}
	  </ul>
    </div>
  )
}

export default App