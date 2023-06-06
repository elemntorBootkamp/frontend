import React from 'react';
import { Provider } from 'react-redux'
import './App.css'
import { ourStore } from './Redux/myStore'
import { BrowserRouter } from 'react-router-dom'
import { Routing } from '../allrouting'
import { Page } from './stories/Page'

function App() {
  

  return <>
    <Provider store={ourStore}>
    <BrowserRouter>
    <Page></Page>
    <Routing></Routing>
    </BrowserRouter>
    </Provider>
  </>

}


export default App
