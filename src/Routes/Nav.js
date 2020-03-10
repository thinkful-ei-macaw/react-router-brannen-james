import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar'
function Nav(props) {
  return (
    <div className="App">
      <Header />
      <main>
        <div>
          <Sidebar folders={props.store.folders} history={props.history} />
        </div>

      </main>
    </div>
  )
}

export default Nav;