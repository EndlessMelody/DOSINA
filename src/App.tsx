import { useState } from 'react';
import { LandingPage } from './components/landing';
import { Dashboard } from './components/dashboard';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>('landing');

  const handleTryDemo = () => {
    setCurrentView('dashboard');
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
  };

  return (
    <div className="min-h-screen bg-[#fafbfc]">
      {currentView === 'landing' ? (
        <LandingPage onTryDemo={handleTryDemo} />
      ) : (
        <Dashboard onBackToLanding={handleBackToLanding} />
      )}
    </div>
  );
}