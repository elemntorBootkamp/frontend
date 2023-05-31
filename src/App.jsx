import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Provider } from 'react-redux'
import './App.css'

import {UpdateManagerDatails} from "./components/login"



import {ShowAllCaterogies} from"./components/login"
import {ShowAllUsers} from"./components/login"
//import {Botton} from './stories/Button'
import {SmallComp} from"./components/login"
import { ourStore } from './Redux/myStore'
import { Page } from './stories/Page'

import {Hello} from"./components/login"
import { ourStore } from './Redux/myStore'

import{User}from "./components/first"


function App() {
  

  return <>
 
   
   
     <Provider store={ourStore}>
       {/* <Data1></Data1> */}
    {/* <SmallComp></SmallComp>  */}
      {/* <ShowAllUsers></ShowAllUsers> */}
      <ShowAllCaterogies></ShowAllCaterogies>
     <Page></Page>
      {/* <UpdateManagerDatails></UpdateManagerDatails>  */}

      
      {/* <Hello></Hello> */}
      <User></User>
      </Provider>
  </>

}
      

export default App
