import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
};

const handleAddTask = () => {
  if (task) {
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  }
};

const handleCompleteTask = (index) => {
  const newTasks = [...tasks];
  newTasks[index].completed = !newTasks[index].completed;
  setTasks(newTasks);
};

const handleRemoveTask = (index) => {
  const newTasks = tasks.filter((task, i) => i !== index);
  setTasks(newTasks);
};

return (
  <div>
    <h1>Lista de Tarefas</h1>
    <input 
      type="text" 
      value={task} 
      onChange={handleInputChange} 
      placeholder="Digite uma tarefa" 
    />
    <button onClick={handleAddTask}>Adicionar</button>
    <ul>
    {tasks.map((task, index) => (
    <li key={index} 
    style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {task.text}
      
      <button onClick={() => handleCompleteTask(index)} 
        style={{ marginLeft: '10px' }} >
        {task.completed ? 'Desfazer' : 'Concluir'}
        </button>
        
      <button onClick={() => handleRemoveTask(index)}
       style={{ marginLeft: '10px', backgroundColor: 'CPowderBlue', color: 'DarkGray' }}
        >Remover</button>
    </li>
      ))}
    </ul>
  </div>
);
}

export default App;


