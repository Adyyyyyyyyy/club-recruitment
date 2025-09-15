import React, { useState } from 'react';
import { Shield, Users, UserCheck, UserX, Eye, Calendar, TrendingUp, Filter } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [filterStatus, setFilterStatus] = useState('all');
  
  // Mock data - would come from API
  const clubName = "Tech Innovators Club";
  const applications = [
    {
      id: 1,
      name: "Arjun Sharma",
      email: "arjun@student.edu",
      year: "2nd Year",
      branch: "Computer Science",
      appliedDate: "2025-09-10",
      status: "pending",
      skills: "Python, React, Machine Learning",
      motivation: "Passionate about AI and want to contribute to innovative projects..."
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya@student.edu",
      year: "3rd Year",
      branch: "Electronics",
      appliedDate: "2025-09-08",
      status: "selected",
      skills: "JavaScript, Node.js, Arduino",
      motivation: "Love building tech solutions that make a difference..."
    },
    {
      id: 3,
      name: "Rahul Kumar",
      email: "rahul@student.edu",
      year: "1st Year",
      branch: "Computer Science",
      appliedDate: "2025-09-12",
      status: "rejected",
      skills: "HTML, CSS, Java",
      motivation: "Eager to learn and grow in the tech field..."
    },
    {
      id: 4,
      name: "Sneha Gupta",
      email: "sneha@student.edu",
      year: "2nd Year",
      branch: "Computer Science",
      appliedDate: "2025-09-11",
      status: "pending",
      skills: "Python, Django, SQL",
      motivation: "Want to work on real-world projects and gain experience..."
    }
  ];

  const stats = {
    totalApplications: applications.length,
    pending: applications.filter(app => app.status === 'pending').length,
    selected: applications.filter(app => app.status === 'selected').length,
    rejected: applications.filter(app => app.status === 'rejected').length,
    vacancies: 15
  };

  const filteredApplications = filterStatus === 'all' 
    ? applications 
    : applications.filter(app => app.status === filterStatus);

  const updateApplicationStatus = (id, newStatus) => {
    // Mock update - would call API
    alert(`Application ${id} status updated to: ${newStatus}`);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'selected': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-slate-900 text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Admin Panel</h1>
              <p className="text-sm text-slate-300">{clubName}</p>
            </div>
          </div>
          <div className="text-sm text-slate-300">
            Recruitment Dashboard
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Applications</p>
                <p className="text-3xl font-bold text-slate-900">{stats.totalApplications}</p>
              </div>
              <Users className="w-12 h-12 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Review</p>
                <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
              </div>
              <Calendar className="w-12 h-12 text-yellow-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Selected</p>
                <p className="text-3xl font-bold text-green-600">{stats.selected}</p>
              </div>
              <UserCheck className="w-12 h-12 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Rejected</p>
                <p className="text-3xl font-bold text-red-600">{stats.rejected}</p>
              </div>
              <UserX className="w-12 h-12 text-red-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Remaining Spots</p>
                <p className="text-3xl font-bold text-teal-600">{stats.vacancies - stats.selected}</p>
              </div>
              <TrendingUp className="w-12 h-12 text-teal-500" />
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="bg-white rounded-2xl shadow-xl">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-slate-900">Applications</h2>
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                >
                  <option value="all">All Applications</option>
                  <option value="pending">Pending</option>
                  <option value="selected">Selected</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {filteredApplications.map((application) => (
                <div key={application.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-slate-900">{application.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                          {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div><strong>Email:</strong> {application.email}</div>
                        <div><strong>Year:</strong> {application.year}</div>
                        <div><strong>Branch:</strong> {application.branch}</div>
                        <div><strong>Applied:</strong> {application.appliedDate}</div>
                        <div><strong>Skills:</strong> {application.skills}</div>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm text-gray-700">
                          <strong>Motivation:</strong> {application.motivation}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => alert(`Viewing full application for ${application.name}`)}
                      className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                    
                    {application.status === 'pending' && (
                      <>
                        <button
                          onClick={() => updateApplicationStatus(application.id, 'selected')}
                          className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        >
                          <UserCheck className="w-4 h-4" />
                          <span>Accept</span>
                        </button>
                        <button
                          onClick={() => updateApplicationStatus(application.id, 'rejected')}
                          className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                        >
                          <UserX className="w-4 h-4" />
                          <span>Reject</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredApplications.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No applications found</h3>
                <p className="text-gray-500">
                  {filterStatus === 'all' 
                    ? 'No applications have been submitted yet.' 
                    : `No ${filterStatus} applications found.`
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;