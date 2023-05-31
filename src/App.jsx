import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Provider } from 'react-redux'
import './App.css'
import {Hello} from"./components/login"
import { ourStore } from './Redux/myStore'

import{User}from "./components/first"

function App() {
  

  return <>
 
   
   
     <Provider store={ourStore}>
      
      {/* <Hello></Hello> */}
      <User></User>
      </Provider>
  </>

}
      

export default App
