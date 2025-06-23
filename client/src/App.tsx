import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ScenarioPage from './pages/ScenarioPage';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => (
  <div>
    <nav>
      <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link>
    </nav>
    <Routes>
      <Route path="/" element={<ScenarioPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </div>
);

export default App;
