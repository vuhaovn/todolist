import React, { Component } from 'react';

class ItemTask extends Component {
  deleteHandle(id) {
    this.props.onDelete(id);
  }

  editHandle(task) {
    this.props.onEdit(task);
  }

  render() {
    let { task, index } = this.props;
    return (
      <div className="row valign-wrapper">
        <div className="col s1 m2">{index + 1}</div>
        <div className="col s4 m4">{task.name}</div>
        <div className="col s3 m3"><span className={"level " + task.level}>{task.level}</span></div>
        <div className="col s4 m3 action">
          <a className="waves-effect blue darken-3 btn-small" onClick={this.editHandle.bind(this, task)}>Edit</a>
          <a className="waves-effect red accent-3 btn-small" onClick={this.deleteHandle.bind(this, task.id)}>Delete</a>
        </div>
      </div>
    );
  }
}

export default ItemTask;
