import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './Components/provider/AuthProvider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>

   </AuthProvider>
  </React.StrictMode>,
)
