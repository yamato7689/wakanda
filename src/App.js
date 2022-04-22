import React from 'react';
import './App.css';

const url = 'https://cdn.mos.cms.futurecdn.net/n7ocEM3ckxGNQHmUBNCuW.png'
function App() {
  return (
    <div className="App">
     <h1>Wakanda</h1>
     <div>
       <img src={url} alt='wakanda' />
     </div>
     <p>Este es el inicio de un proyecto para toda la familia.</p>
    </div>
  );
}

export default App;
