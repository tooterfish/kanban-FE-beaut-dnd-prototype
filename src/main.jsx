import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'normalize.css'
import './index.css'
import { ModalProvider } from './contexts/ModalProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ModalProvider>
        <App />
    </ModalProvider>
)
