import React from 'react';
import { Provider } from 'react-redux'
import { ourStore } from './Redux/myStore'
import { BrowserRouter } from 'react-router-dom'
import { Routing } from '../allrouting'
import { Page } from '../src/components/Page'
import './App.css'


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


export default App;