
import { Provider } from 'react-redux'
import './App.css'
import { ourStore } from './Redux/myStore'
import { Header } from '../src/stories/Header'
import { BrowserRouter } from 'react-router-dom'
import { Routing } from '../allrouting'
function App() {
  

  return <>
    {/* store-יש להגדיר ברכיב
   את המחסן שלנו*/}

    {/* <div>hello</div> */}



    <Provider store={ourStore}>
      {/* <Data1></Data1> */}
      {/* <SmallComp></SmallComp>  */}
      {/* <ShowAllUsers></ShowAllUsers> */}
      {/* <ShowAllCaterogies></ShowAllCaterogies> */}
      {/* <UpdateManagerDatails></UpdateManagerDatails>  */}
    <BrowserRouter>
    {/* <Header></Header> */}
    <Header></Header>
    <Routing></Routing>
    </BrowserRouter>
      
    </Provider>
  </>

}


export default App
