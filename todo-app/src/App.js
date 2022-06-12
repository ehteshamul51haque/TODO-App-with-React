import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@mui/material';
import Todo from './Todo';
import './App.css';
import { useEffect } from 'react';
import db from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    //this code here....fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); //will stop automatic refresh(default for a form) after submit
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos, input]) //It was used to add items but above db code replaces it
    setInput('');//clear input after clicking add todo button
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <FormControl>
          <InputLabel>Write a To-Do</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        {/* <input value={input} onChange={event => setInput(event.target.value)} /> */}
        {/* <button disabled={!input} type="submit" onClick={addTodo}>Add To-Do</button> */}
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add To-Do
        </Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
