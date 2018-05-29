import React, { Component } from 'react';
import uuid from 'uuid/v4';

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: {}
    }
  }

  handleSubmit(e){
    e.preventDefault();
    let taskName = this.refs.task_name.value;
    let taskLevel = this.refs.task_level.value;
    if(taskName === "") {
      alert('Please input task name');
    } else {
      this.setState({
        newTask: {
          id: uuid(),
          name: taskName,
          level: taskLevel
        }
      }, () => {
        this.props.getNewTask(this.state.newTask);
      });
    }
    document.getElementById('inputAdd').value = "";
  }

  render() {
    let option = this.props.levels.map((level, index) => {
      return (
        <option key={index} value={level}>{level}</option>
      )
    })
    return (
      <form id="addForm" onSubmit={this.handleSubmit.bind(this)}>
        <div className="add_task row">
          <div className="input-field col s12 l6">
            <input id="inputAdd" type="text" className="validate" ref="task_name" autoComplete="off" />
            <label htmlFor="inputAdd">Task name ...</label>
          </div>
          <div className="input-field col s12 l3">
            <select ref="task_level">
              {option}
            </select>
            <label>Level select</label>
          </div>
          <div className="input-field col s12 l4">
            <button className="btn-res waves-effect light-blue lighten-2 btn" type="submit">Add Task</button>
          </div>
        </div>
      </form>
    );
  }
}

AddTask.defaultProps = {
  levels: ["high", "medium", "small"]
}

export default AddTask;
