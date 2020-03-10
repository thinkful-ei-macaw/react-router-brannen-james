import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar'
function Nav(props) {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="Sidebar">
          <Sidebar folders={props.store.folders} history={props.history} />
        </div>
        <div className="content">
          
        </div>
      </main>
    </div>
  )
}

export default Nav;