import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router'
import { Home } from './views/Home.jsx'
import { Paper } from './views/Paper.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/paper/" element={<Paper />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
