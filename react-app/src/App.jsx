import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './components/Views/LoginPage';
import Home from './components/Views/Home';
// Import the RaceTable component

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

// Define Seasons component to handle SeasonSelect and RaceTable together

export default App;
