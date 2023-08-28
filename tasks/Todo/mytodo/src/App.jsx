import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function App() {
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [status, setStatus] = useState('not completed');
  const [editingTodoId, setEditingTodoId] = useState(null);

  const addTodo = () => {
    if (taskName.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        taskName,
        taskDescription,
        status,
      };
      setTodos([...todos, newTodo]);
      setTaskName('');
      setTaskDescription('');
      setStatus('not completed');
    }
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find(todo => todo.id === id);
    setEditingTodoId(id);
    setTaskName(todoToEdit.taskName);
    setTaskDescription(todoToEdit.taskDescription);
    setStatus(todoToEdit.status);
  };

  const updateTodo = () => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === editingTodoId) {
        return {
          ...todo,
          taskName,
          taskDescription,
          status,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditingTodoId(null);
    setTaskName('');
    setTaskDescription('');
    setStatus('not completed');
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    if (editingTodoId === id) {
      setEditingTodoId(null);
      setTaskName('');
      setTaskDescription('');
      setStatus('not completed');
    }
  };

  return (
    <div className="App">
      
        
    <div className='text'>
    <div> <h1>My Todo </h1></div>
      <div className='taskname'>
      <input
        type="text"
        placeholder="Todo Name"
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
      />
      
      </div>
      <div>
      <textarea
        placeholder="Todo Description"
        value={taskDescription}
        onChange={e => setTaskDescription(e.target.value)}
      />
      </div>
     
      
      
      {editingTodoId ? (
        <div>
          <button onClick={updateTodo}>Update Todo</button>
          <button onClick={() => setEditingTodoId(null)}>Cancel</button>
        </div>
      ) : (
        <button onClick={addTodo}>Add Todo</button>
      )}
    
    </div>
    <div className='container-fluid px-5 py-5 mx-auto'>
      <div className='row d-flex mb-4 px-3'>
      {todos.map(todo => (
        <Card style={{ width: '18rem' }} className='flued'   key={todo.id}>
        <div>
          <div>  <h3>Name :{todo.taskName}</h3></div>
         <div> <p>Description :{todo.taskDescription}</p></div>
         <div>  <select value={status} onChange={e => setStatus(e.target.value)}> status
        <option value="not completed">Not Completed</option>
        <option value="completed">Completed</option>
      </select></div> 
          
          <button className='edit' onClick={() => editTodo(todo.id)}>Edit</button>
          <button className='delete' onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
        </Card>
        
      ))}
    </div>
    </div>
  </div>
  )
}

export default App
