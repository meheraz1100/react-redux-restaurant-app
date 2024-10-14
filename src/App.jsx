import { BrowserRouter } from 'react-router-dom'
import './App.css'
import MainComponent from './components/MainComponent'
import myStore from './redux/store'
import { Provider } from 'react-redux'

function App() {
  // console.log("App.jsx", myStore.getState());
  return (
    <>
      <div>
        <Provider store={myStore}>
          <BrowserRouter>
            <MainComponent  />
          </BrowserRouter>
        </Provider>
      </div>
    </>
  )
}

export default App
