import React, { Component } from 'react';
import ItemTask from './ItemTask';

class ListTask extends Component {
  deleteHandle(id) {
    this.props.deleteTask(id);
  }
  editHandle(task) {
    this.props.editTask(task);
  }
  render() {
    let itemTask = this.props.tasks.map((task, index) => {
      return <ItemTask onDelete={this.deleteHandle.bind(this)} onEdit={this.editHandle.bind(this)} task={task} key={index} index={index}/>
    })
    return (
      <div className="item_task">
        <div className="row">
          <div className="col s1 m2">#</div>
          <div className="col s4 m4">Task</div>
          <div className="col s3 m3">Level</div>
          <div className="col s4 m3">Action</div>
        </div>
        {itemTask}
      </div>
    );
  }
}

export default ListTask;
