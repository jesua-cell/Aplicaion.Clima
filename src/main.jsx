import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WheaterApp from './WheaterApp'
import './styles/weatherStyles.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WheaterApp />
  </StrictMode>,
)
