import { Provider } from 'react-redux'
import './App.css'
import { ourStore } from './Redux/myStore'
import { Page } from './stories/Page'
import{User}from "./components/first"

function App() {
  return <>
     <Provider store={ourStore}>
     <Page></Page>
      <User></User>
      </Provider>
  </>
}
    
export default App
