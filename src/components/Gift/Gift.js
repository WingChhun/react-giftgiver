import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from 'react-bootstrap';

class Gift extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: '',
      present: ''
    };
  }

  handleChange = field => event => {
    const value = event.target.value;

    switch (field) {
      case 'person':
        this.setState({ person: value });
        return;

      case 'present':
        this.setState({ present: value });
        return;

      default:
        return;
    }
  };

  render() {
    const { gift, removeGift } = this.props;

    return (
      <div>
        <Form>
          <FormGroup>
            <ControlLabel>Person</ControlLabel>
            <FormControl
              className='input-person'
              onChange={this.handleChange('person')}
            />

            <ControlLabel>Present</ControlLabel>
            <FormControl
              className='input-present'
              onChange={this.handleChange('present')}
            />
          </FormGroup>
        </Form>

        <Button className='btn-remove' onClick={removeGift(gift.id)}>
          Remove Gift
        </Button>
      </div>
    );
  }
}

//Note: PropTypes check
Gift.propTypes = {
  gift: PropTypes.object.isRequired,
  removeGift: PropTypes.func.isRequired
};

Gift.defaultProps = {
  gift: { id: 0 },
  removeGift: () => {}
};

export default Gift;
