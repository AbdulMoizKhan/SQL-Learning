import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ScenarioPage from './pages/ScenarioPage';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    <nav className="p-4 border-b bg-white mb-4 space-x-4">
      <Link className="text-blue-600" to="/">Home</Link>
      <Link className="text-blue-600" to="/dashboard">Dashboard</Link>
    </nav>
    <Routes>
      <Route path="/" element={<ScenarioPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </div>
);

export default App;
