import './style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserPage } from './features/user/UserPage'

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <UserPage />
  </React.StrictMode>,
)
