import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter, Routes, Route, BrowserRouter } from 'react-router'
import { Home } from './views/Home.jsx'
import { Paper } from './views/Paper.jsx'
import { Artes } from './papers/Artes.jsx'
import { Cultura } from './papers/Cultura.jsx'
import { Derecho } from './papers/Derecho.jsx'
import { Fisica } from './papers/Fisica.jsx'
import { Calculo } from './papers/Calculo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paper/artes" element={<Paper><Artes /></Paper>} />
        <Route path="/paper/cultura" element={<Paper><Cultura /></Paper>} />
        <Route path="/paper/derecho" element={<Paper><Derecho /></Paper>} />
        <Route path="/paper/fisica" element={<Paper><Fisica/></Paper>} />
        <Route path="/paper/calculo" element={<Paper><Calculo /></Paper>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
