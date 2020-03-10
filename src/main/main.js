import React from 'react';
import Route from 'route-component';
import { Link } from 'react-router-dom';
import folder from '../folder/folder';
import note from '../note/note';

function Main() {
    return <>
        <header>
            <Link to='/'>Home</Link>
        </header>

        <main>
            <Route path='../note/note.js' component={note} />
        </main>

        <sidebar>
        <Route path='../folder/folder.js' component={folder} />
        </sidebar>
    </>
}

export default Main;