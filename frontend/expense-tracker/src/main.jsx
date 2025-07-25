import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(//creates root
  <StrictMode>
    <App />
  </StrictMode>,
)
//identifies unsafe lifecycle methods,potential bugs, does not render anything on UI