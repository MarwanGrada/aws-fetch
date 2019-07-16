import React from 'react';
import { BrowserRouter} from 'react-router-dom';

import Header from './Header';
import Body from './Body.js'




const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="ui container">
        <Body />
      </div>
    </BrowserRouter>
  )
}


export default App;
