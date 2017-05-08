import React, { Component, PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

class InputForm extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  submit() {
    this.props.submit(this.state.value);
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          bsSize="large"
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter the food you want to pair with"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
        <Button onClick={this.submit} className="btn btn-primary btn-large centerButton">
          Find Pairings
        </Button>
      </form>
    );
  }
}

export default InputForm;
