import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class App extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            gifts: []
        }
    }

    addButton = () => {

        const {gifts} = this.state;

        const ids = gifts.map(gift => gift.id);
        const max_id = ids.length > 0
            ? Math.max(...ids)
            : 0;

        gifts.push({id: max_id});

        this.setState({gifts})

    }
    render()
    {
        return (
            <div>
                <h2>Gift Giver</h2>

                <Button className="btn-add" onClick={this.addButton}>Add Gift</Button>
            </div>
        )
    }
}

export default App;