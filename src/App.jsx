/* eslint-disable linebreak-style */
// import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Provider } from 'react-redux';
import './App.css';
// import {Botton} from './stories/Button'
import { ourStore } from './Redux/myStore';
//import { Page } from './stories/Page'
//import {Hello} from"./components/login"
import React from 'react';

import { User } from './components/first';

function App() {
  return (
    <>
      <Provider store={ourStore}>
        {/* <Data1></Data1> */}

        {/* <Page></Page> */}
        {/* <UpdateManagerDatails></UpdateManagerDatails>  */}

        {/* <Hello></Hello> */}
        <User></User>
      </Provider>
    </>
  );
}

export default App;
