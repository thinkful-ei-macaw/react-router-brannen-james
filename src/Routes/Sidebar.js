import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar(props) {
    console.log(props.folders)
    // const folders = props.store.join()

    return (
        <ul>
            {props.folders.map(folder => <li><Link to={`/folder/${folder.id}`}>{folder.name}</Link></li>)}
        </ul>
    )
}

export default Sidebar