import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Message from "./components/Message"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Abel's React-Redux Todo List</h1>
        </div>
        <Router>
          <div className="Todo-App">
            <Message message="Hello World!" />
            <TodoForm />
            <Route path='/:filter?' render={({ match }) => (
              <TodoList filter={match.params.filter} />
            )} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
