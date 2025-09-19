import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import UserForm from './components/UserForm';
import Dashboard from './components/Dashboard';
import { defaultProjects } from '../data/projects';

function DashboardWrapper({ user }) {
  const { projectId } = useParams();

  // Chercher le projet correspondant
  const project = defaultProjects.find((p) => p.id === projectId);

  return <Dashboard user={user} project={project} />;
}

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserSubmit = (userData) => {
    setIsLoading(true);
    setTimeout(() => {
      setUser({
        ...userData,
        id: Date.now().toString(),
        joinedAt: new Date().toISOString(),
      });
      setIsLoading(false);
    }, 1000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Chargement en cours...</p>
      </div>
    );
  }

  if (!user) {
    return <UserForm onUserSubmit={handleUserSubmit} />;
  }

  return (
    <Router>
      <Routes>
        {/* Dashboard normal → on prend le premier projet par défaut */}
        <Route
          path="/"
          element={<Dashboard user={user} project={defaultProjects[0]} />}
        />

        {/* Dashboard invité → projet via lien */}
        <Route
          path="/project/:projectId"
          element={<DashboardWrapper user={user} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
