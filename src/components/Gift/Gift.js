import React, {Component} from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

class Gift extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            person: '',
            present: ''
        };
    }

    handleChange = field => (event) => {

        const value = event.target.value;

        switch (field) {
            case 'person':

                this.setState({person: value});
                return;

            case 'present':

                this.setState({present: value});
                return;

            default:
                return;

        }

    }

    render()
    {
        return (
            <div>
                <Form>
                    <FormGroup>

                        <ControlLabel>Person</ControlLabel>
                        <FormControl className="input-person" onChange={this.handleChange('person')}/>

                        <ControlLabel>Present</ControlLabel>
                        <FormControl className="input-present" onChange={this.handleChange('present')}/>

                    </FormGroup>

                </Form>
            </div>
        );
    }
}

export default Gift;