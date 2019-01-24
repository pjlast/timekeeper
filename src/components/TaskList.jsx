import React, { Component } from 'react';
import { Button, Card, InputGroup, FormControl } from 'react-bootstrap';

export class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskList: [],
    };
  }

  newTask(taskName) {
    const taskList = this.state.taskList.slice();
    taskList.push(taskName);

    this.setState({taskList: taskList});
    this.taskNameInput.value = "";
    this.taskNameInput.focus();
  }

  handleKeyPress(target) {
    if(target.charCode === 13) {
       this.newTask(this.taskNameInput.value);   
    }
  }

  deleteTask(i) {
    const taskList = i === 0
      ? this.state.taskList.slice(1)
      : this.state.taskList.slice(0, i).concat(this.state.taskList.slice(i+1));

    this.setState({taskList: taskList});
  }

  renderTaskList() {
    const output = [];

    for (let i = 0; i < this.state.taskList.length; i++) {
      output.push(
        <Task key={i} onClick={() => this.deleteTask(i)} taskName={this.state.taskList[i]} />
      );
    }

    return output;
  }

  render() {

    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>
            Task list
          </Card.Title>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Task name"
              ref={(ref) => {this.taskNameInput = ref}}
              onKeyPress={(target) => this.handleKeyPress(target)}
            />
            <InputGroup.Append>
              <Button onClick={() => this.newTask(this.taskNameInput.value)}>+</Button>
            </InputGroup.Append>
          </InputGroup>
          {this.renderTaskList()}
        </Card.Body>
      </Card>
    );
  }
}

export class Task extends Component {
  render() {
    return (
      <InputGroup className="mb-3">
        <FormControl
          placeholder={this.props.taskName}
          disabled
        />
        <InputGroup.Append>
          <Button
            onClick={this.props.onClick}
            variant="outline-secondary"
          >
            Delete
          </Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}
