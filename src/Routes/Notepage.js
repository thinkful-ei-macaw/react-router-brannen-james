import React from 'react';

class Notepage extends React.Component {

    static defaultProps = {
        notes: []
    }

    render() {
        
        return (
            <ul>
                <li>{this.props.notes.map(obj => obj.content)}</li>
            </ul>
        )
    }
}

export default Notepage