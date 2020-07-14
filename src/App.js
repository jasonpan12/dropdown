import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import DropdownMenu from './components/DropdownMenu';
import SearchContext from './context/search-context';

function App() {
    const [inputText, setInputText] = useState('');

  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}


      <SearchContext.Provider value={{inputText, setInputText}}>
          <SearchBar/>
          <DropdownMenu/>
      </SearchContext.Provider>

    </div>
  );
}

export default App;
