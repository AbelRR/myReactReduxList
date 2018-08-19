import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Message from "./components/Message"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Abel's React-Redux Todo List</h1>
        </div>
        <div className="Todo-App">
          <Message message="Hello World!" />
          <TodoForm />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
