import React from 'react'
import { Link } from 'react-router-dom';

class Notelist extends React.Component {

    static defaultProps = {
        notes: []
    }

    render() {
        return (
            <ul>
                <div>
                    {this.props.notes.map(display => <li><Link to={`/note/${display.id}`}>{display.name}</Link></li>)}
                </div>
            </ul>
        )
    }
}

export default Notelist