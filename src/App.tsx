import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from "./ToDo/ToDoList";
import {Task} from "./Classes";

function App() {
    const todos = [
        new Task(1, 'Купить хрень 1'),
        new Task(2, 'Купить хрень 2'),
        new Task(3, 'Купить хрень 3')
    ];

    return (
        <div className='wrapper'>
            <h1>React tutorial</h1>
            <ToDoList {...todos}/>
        </div>
    );

    /*
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );*/
}

export default App;
