import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import CursorContextProvider from './context/CursorContext'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <CursorContextProvider>
    <Router>
      <App />
    </Router>
  </CursorContextProvider>,
  document.getElementById('root')
)

serviceWorker.register()
