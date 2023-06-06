
import { Provider } from 'react-redux'
import './App.css'
import { ourStore } from './Redux/myStore'
import { BrowserRouter } from 'react-router-dom'
import { Routing } from '../allrouting'
import { Page } from '../src/components/Page'

function App() {
  

  return <>
    {/* store-יש להגדיר ברכיב
   את המחסן שלנו*/}

    {/* <div>hello</div> */}



    <Provider store={ourStore}>
    <BrowserRouter>
    <Page></Page>
    <Routing></Routing>
    </BrowserRouter>
      
    </Provider>
  </>

}


export default App
// npx cypress open