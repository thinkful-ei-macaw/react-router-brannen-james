import React from 'react';
import './App.css';
import dummyStore from '../dummy-store';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Notelist from './Notelist';
import Notepage from './Notepage';
import DefaultPage from './DefaultPage';



class App extends React.Component {
  state = dummyStore;


  render() {
    console.log(this.state.dummyStore);

    const NoMatch = () => {
      return (
        <h3>404 - Not Found</h3>
      )
    }

    return (
      <div> 
        <h1>Always on the Page</h1>
        <Switch>
        <Route path='/folder/:folderId'  render={(routerProps) =>
            <Nav store={this.state} />} />
        <Route path='/note/:noteId' render={(routerProps) =>
          <Nav folder={this.state.notes.filter(note => note.id === routerProps.match.params.noteId)} />} />
          <Route path='/'  render={(routerProps) =>
            <Nav store={this.state} />} />
        </Switch>
        <Switch>
          <Route path='/folder/:folderId'  render={(routerProps) =>
            <Notelist notes={this.state.notes.filter(note => note.folderId === routerProps.match.params.folderId)}
            />} />
          <Route path='/note/:noteId' render={(routerProps) =>
          <Notepage notes={this.state.notes.filter(note => note.id === routerProps.match.params.noteId)} />}/>
          <Route path='/' render={(routerProps) =>
            <Notelist notes={this.state.notes}
            />} />
          <Route component={NoMatch} />
        </Switch>
      </div>
      
    )
  }
}


export default App;
