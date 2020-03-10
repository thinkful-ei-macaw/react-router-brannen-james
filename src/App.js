import React from 'react';
import './App.css';
import {} from './dummy-store';
import ReactDom from 'react-dom';
import Main from './main/main';
import Note from './note/note';
import Folder from './folder/folder';


class App extends React.Component {
  state = {
    dummyStore: {}
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <Main store={this.state.dummyStore}/>
      </div>
    )
  }
}

export default App;
