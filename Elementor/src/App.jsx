import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Provider } from 'react-redux'
import './App.css'
import {Hello} from"./components/login"
import { ourStore } from './Redux/myStore'



function App() {
  

  return <>
 
   
   
     <Provider store={ourStore}>
      
      <Hello></Hello>
      
      </Provider>
  </>

}
      

export default App
