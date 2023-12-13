import './index.css'
import { store } from "./redux/store"
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import '@coreui/coreui/dist/css/coreui.min.css'
import { DefaultLayout } from './layouts/DefaultLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CounterPartyInformation } from './pages/CounterPartyInformation'
import { Login } from './pages/Login'
import { Testing } from './pages/Testing'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<CounterPartyInformation />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/test' element={<Testing />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode>
)
