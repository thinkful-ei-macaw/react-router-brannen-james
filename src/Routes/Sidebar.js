import React from 'react'


function Sidebar(props) {
    console.log(props.folders)
    // const folders = props.store.join()

    return (
        <ul>
            {props.folders.map(folder => <li onClick={() => props.history.push('folder/' + folder.id)} id={folder.id}>{folder.name}</li>)}
        </ul>
    )
}

export default Sidebar