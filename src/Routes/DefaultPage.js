import React from 'react';
import {Route} from 'react-router-dom';
import Nav from './Nav';
import Notelist from './Notelist';
import Notepage from './Notepage';

function DefaultPage(props) {
    return (
        <div>
            <Route path='/folder/:folderId' render={(routerProps) =>
              <Notelist notes={props.store.notes.filter(note => note.folderId === routerProps.match.params.folderId)}
               />} />
            <Route path='/note/:noteId' render={(routerProps) =>
          <Notepage notes={props.store.notes.filter(note => note.folderId === routerProps.match.params.folderId)} />} />
        </div>
      )
}

export default DefaultPage;