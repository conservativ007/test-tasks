import React from 'react';
import { GetUsers } from './components/users/GetUsers';
import { Search } from './components/search/Search';
import { Popup } from './components/popup/Popup';

function App() {
  return (
    <div className="App">
      <Search />
      <GetUsers />
      <Popup />
    </div>
  );
}

export default App;
