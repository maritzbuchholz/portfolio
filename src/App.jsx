import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {

  return (
    <div className="app-layout">
      <div className="app-layout__content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
