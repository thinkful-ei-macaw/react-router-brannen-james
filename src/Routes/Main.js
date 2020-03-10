import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar'
function Main(props) {
  return (
    <div className="App">
      <Header />
      <main>
        <div>
          <Sidebar store={props.store.folders.map(folder => folder)} />
        </div>
        <p>Content</p>
      </main>
    </div>
  )
}

export default Main;