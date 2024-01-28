import React from '/node_modules/react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(React.StrictMode, null, React.createElement(App)),
)
