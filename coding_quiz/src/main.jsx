import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import './styles.css'
import App from './App.jsx'
import Customization from './Customization.jsx';
import Quiz from './Quiz.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/customization" element={<Customization  />} />
        <Route path="/quiz" element={<Quiz  />} />
      </Routes>
    </Router>
  </StrictMode>,
)
