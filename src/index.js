import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import CursorContextProvider from './context/CursorContext'
import App from './App'
import * as serviceWorker from './serviceWorker'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <CursorContextProvider>
    <Router>
      <App />
    </Router>
  </CursorContextProvider>
)

serviceWorker.register()
