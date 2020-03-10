import React from 'react';
import './App.css';
import { } from '../dummy-store';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
import Folder from './Folder';


class App extends React.Component {
  state = {
    dummyStore: {}
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
          <Main store={this.state.dummyStore}
          />
        } />
        <Route path='/folder/' component={Folder} />
        <Route componenet={NoMatch} />
      </Switch>
    )
  }
}

export default App;
