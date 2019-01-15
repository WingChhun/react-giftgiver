import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import Gift from '../Gift/Gift';
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

        gifts.push({
            id: max_id + 1
        });

        this.setState({gifts})

    }

    render()
    {

        const {gifts} = this.state;

        return (
            <div>
                <h2>Gift Giver</h2>

                <div className="gift-list">

                    {gifts.map(gift => <Gift key={gift.id}/>)}

                </div>

                <Button className="btn-add" onClick={this.addButton}>Add Gift</Button>
            </div>
        )
    }
}

export default App;