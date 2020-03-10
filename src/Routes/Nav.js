import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom';


function Nav(props) {

  let leftbar;

  if(props.store) {
    leftbar = <Sidebar folders={props.store.folders} history={props.history} />
  } else {
    const url = props.folder.map(obj => obj.folderId);
    leftbar = <button type="submit"><Link to={`/folder/${url}`}>Go Back</Link></button>
  }


  return (
    <div className="App">
      <Header />
      <main>
        <div className="Sidebar">
          {leftbar}
        </div>
        <div className="content">
          
        </div>
      </main>
    </div>
  )
}

export default Nav;