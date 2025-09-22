import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import UserForm from './components/UserForm';
import Dashboard from './components/Dashboard';

function DashboardWrapper({ user }) {
  const { ownerEmail, projectId } = useParams(); 
  return <Dashboard user={user} owner={ownerEmail} initialProjectId={projectId} />;
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
        joinedAt: new Date().toISOString()
      });
      setIsLoading(false);
    }, 1000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
          <p className="text-lg text-gray-700">Setting up your workspace...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <UserForm onUserSubmit={handleUserSubmit} />;
  }

  return (
    <Router>
      <Routes>
        {/* Accès au dashboard normal */}
        <Route path="/" element={<Dashboard user={user} />} />

        {/* Accès via lien projet */}
        <Route path="/project/:ownerEmail/:projectId" element={<DashboardWrapper user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
