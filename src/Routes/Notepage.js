import React from 'react'

class Notepage extends React.Component {

    static defaultProps = {
        notes: []
    }

    render() {
        return (
            <ul>
                {this.props.notes.filter(display => <li>{display.name}</li>)}
            </ul>
        )
    }
}

export default Notepage