import React from 'react';
import Header from './Header';

function Main(props) {
    return (
        <div className="App">
          <Header />
          <main>
            <p>Side Bar</p>
            <p>Content</p>
          </main>
        </div>
    )
}

export default Main;