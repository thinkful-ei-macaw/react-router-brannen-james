import React from 'react';
import './App.css';
import dummyStore from '../dummy-store';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Notelist from './Notelist';
import Notepage from './Notepage';



class App extends React.Component {
  state = {
    dummyStore: dummyStore
  }


  render() {
    console.log(this.state.dummyStore);

    const NoMatch = () => {
      return (
        <h3>404 - Not Found</h3>
      )
    }

    return (
      <Switch>
        <Route exact path='/' render={(routerProps) =>
          <Nav   {...routerProps} store={this.state.dummyStore}
          />
        } />
        {/* <Route path='/' render={(routerProps) =>
          <Nav   {...routerProps} store={this.state.dummyStore}
          />
        } />
        <Route exact path='/' render={(routerProps) =>
          <Nav   {...routerProps} store={this.state.dummyStore}
          />
        } /> */}
        <Route exact path='/' component={Notelist} />
        <Route path='/folder/:folderId' render={(routerProps) =>
          <Notelist notes={this.state.dummyStore.notes.filter(note => note.folderId === routerProps.match.params.folderId)} />} />
        <Route path='/note/:noteId' render={(routerProps) =>
          <Notepage notes={this.state.dummyStore.notes.filter(note => note.folderId === routerProps.match.params.folderId)} />} />
        <Route component={NoMatch} />
      </Switch>
    )
  }
}

export default App;
