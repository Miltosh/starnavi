import ReactA from 'react2'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  ReactA.createElement(ReactA.StrictMode, null, ReactA.createElement(App)),
)
