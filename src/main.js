import React from '/node_modules/react'
import ReactDOM from '/node_modules/react-dom'
import { App } from './App.tsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(React.StrictMode, null, React.createElement(App)),
)
