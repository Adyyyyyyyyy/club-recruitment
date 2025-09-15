import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Components
import Login from './components/auth/Login';
import StudentDashboard from './components/student/Dashboard';
import ApplicationForm from './components/student/ApplicationForm';
import StatusDashboard from './components/student/StatusDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import Header from "./components/shared/Header";
import Loading from "./components/shared/Loading";
import NotFound from "./components/shared/NotFound";

// Example:
// <Header title="Student Dashboard" onLogout={() => console.log("Logged out")} />
// <Loading />
// <Route path="*" element={<NotFound />} />


// Mock authentication context
const AuthContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);

  const login = (userData, type) => {
    setUser(userData);
    setUserType(type);
  };

  const logout = () => {
    setUser(null);
    setUserType(null);
  };

  return (
    <AuthContext.Provider value={{ user, userType, login, logout }}>
      <Router>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route 
              path="/" 
              element={!user ? <Login /> : <Navigate to={userType === 'student' ? '/student' : '/admin'} />} 
            />
            
            {/* Student Routes */}
            <Route 
              path="/student" 
              element={user && userType === 'student' ? <StudentDashboard /> : <Navigate to="/" />} 
            />
            <Route 
              path="/student/apply/:clubId" 
              element={user && userType === 'student' ? <ApplicationForm /> : <Navigate to="/" />} 
            />
            <Route 
              path="/student/status" 
              element={user && userType === 'student' ? <StatusDashboard /> : <Navigate to="/" />} 
            />
            
            {/* Admin Routes */}
            <Route 
              path="/admin" 
              element={user && userType === 'admin' ? <AdminDashboard /> : <Navigate to="/" />} 
            />
            
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default App;