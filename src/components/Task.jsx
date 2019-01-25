import React, { Component } from 'react';
import { Button, Card, InputGroup, FormControl } from 'react-bootstrap';

export class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      estimatedTime: "",
      actualTime: "",
    }
  }

  render() {
    return (
      <Card style={{ marginTop: "15px" }}>
        <Card.Body>
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
        </Card.Body>
      </Card>
    );
  }
}
