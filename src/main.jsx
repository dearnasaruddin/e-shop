import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import { store } from './store'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
