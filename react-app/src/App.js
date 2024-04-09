import  { useState } from 'react';
import LoginPage from './components/Views/LoginPage';
import Home from './components/Views/Home';

function App() {
  // Define state to manage the current view
  const [currentView, setCurrentView] = useState('login');

  // Function to switch to the home view
  const switchToHome = () => {
    setCurrentView('home');
  };

  // Function to switch to the login view
  const switchToLogin = () => {
    setCurrentView('login');
  };

  // Render the appropriate component based on the current view
  return (
    <main>
      {currentView === 'login' && <LoginPage switchToHome={switchToHome} />}
      {currentView === 'home' && <Home switchToLogin={switchToLogin} />}
      
    </main>
  );
}

export default App;
