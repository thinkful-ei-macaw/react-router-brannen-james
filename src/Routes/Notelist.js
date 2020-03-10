import React from 'react'

class Notelist extends React.Component {

    static defaultProps = {
        notes: []
    }

    render() {
        return (
            <ul>
                <div>
                    {this.props.notes.map(display => <li id={display.id}>{display.content}</li>)}
                </div>
            </ul>
        )
    }
}

export default Notelist