import React from 'react';
import './App.css';
import dummyStore from '../dummy-store';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Notelist from './Notelist';
import Notepage from './Notepage';
import DefaultPage from './DefaultPage';



class App extends React.Component {
  state = {
    dummyStore: dummyStore
  }

  NoteList = () => {
    return (
      <div>
            <Route path='/' render={(routerProps) =>
              <Nav   {...routerProps} store={this.state.dummyStore}
              />
            } />
            <Route path='/folder/:folderId'  render={(routerProps) =>
            <DefaultPage   {...routerProps} store={this.state.dummyStore}
            />
          } />
      </div>
    )
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
        {/* <Route path='/' render={(routerProps) =>
          <Nav   {...routerProps} store={this.state.dummyStore}
          />
        } />
        <Route exact path='/' render={(routerProps) =>
          <Nav   {...routerProps} store={this.state.dummyStore}
          />
        } /> */}
        <Route path='/' component={this.NoteList} />
        <Route component={NoMatch} />
      </Switch>
    )
  }
}


export default App;
