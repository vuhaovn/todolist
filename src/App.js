import React, { Component } from 'react';
import uuid from 'uuid/v4';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }

  componentWillMount() {
    this.setState({
      tasks: [
        { id: uuid(), name: 'React js', level: "high" },
        { id: uuid(), name: 'Php', level: "small" },
        { id: uuid(), name: 'Node js', level: "medium" }
      ]
    });
  }

  handleAddTask(task) {
    let tasks = this.state.tasks;
    tasks.push(task);
    this.setState({
      tasks: tasks
    });
  }

  handleDelete(id) {
    let tasks = this.state.tasks;
    let index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks
    });
  }

  handleEdit(task) {
    alert('Sorry, this function is still not make ...')
  }

  render() {
    let {tasks} = this.state;
    return (
      <div className="App">
        <div className="container">
          <h1>Todo List React JS App</h1>
          <AddTask getNewTask={this.handleAddTask.bind(this)} />
          <ListTask deleteTask={this.handleDelete.bind(this)} editTask={this.handleEdit.bind(this)} tasks={tasks}/>
        </div>
      </div>
    );
  }
}

export default App;
