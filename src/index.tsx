import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import PrikeyProvider from './utils/PrikeyContext'
import Router from './utils/Router'

ReactDOM.render(
  <React.StrictMode>
    <PrikeyProvider>
      <Router />
    </PrikeyProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
