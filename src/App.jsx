import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Provider } from 'react-redux'
import './App.css'
import {UpdateManagerDatails} from "./components/login"
import {ShowAllCaterogies} from"./components/login"
import {ShowAllUsers} from"./components/login"

import {SmallComp} from"./components/login"
import { ourStore } from './Redux/myStore'



function App() {
  // const [count, setCount] = useState(0)

  return <>
    {/* store-יש להגדיר ברכיב
   את המחסן שלנו*/}

{/* <div>hello</div> */}

   
   
     <Provider store={ourStore}>
       {/* <Data1></Data1> */}
    {/* <SmallComp></SmallComp>  */}
      {/* <ShowAllUsers></ShowAllUsers> */}
      <ShowAllCaterogies></ShowAllCaterogies>
      {/* <UpdateManagerDatails></UpdateManagerDatails>  */}
      
      </Provider>
  </>

}
      

export default App
