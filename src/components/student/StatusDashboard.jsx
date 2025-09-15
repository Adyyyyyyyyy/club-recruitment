import React, { useState } from 'react';
import { User, Clock, CheckCircle, XCircle, Calendar, ArrowRight, Plus } from 'lucide-react';

const StudentStatusDashboard = () => {
  const [activeTab, setActiveTab] = useState('applications');
  
  // Mock data - would come from API
  const myApplications = [
    {
      id: 1,
      clubName: "Tech Innovators Club",
      appliedDate: "2025-09-10",
      status: "pending",
      lastUpdate: "2025-09-12",
      stage: "Under Review",
      clubImage: "🚀",
      vacancies: 15,
      totalApplicants: 45
    },
    {
      id: 2,
      clubName: "Creative Arts Society",
      appliedDate: "2025-09-08",
      status: "selected",
      lastUpdate: "2025-09-14",
      stage: "Selected - Welcome Email Sent",
      clubImage: "🎨",
      vacancies: 20,
      totalApplicants: 32
    },
    {
      id: 3,
      clubName: "Photography Club",
      appliedDate: "2025-09-05",
      status: "rejected",
      lastUpdate: "2025-09-13",
      stage: "Application Reviewed",
      clubImage: "📸",
      vacancies: 18,
      totalApplicants: 42
    }
  ];

  const availableClubs = [
    {
      name: "Business Analytics Club",
      image: "📊",
      vacancies: 12,
      applicants: 28,
      deadline: "2025-09-20"
    },
    {
      name: "Environmental Action Group",
      image: "🌱",
      vacancies: 25,
      applicants: 38,
      deadline: "2025-09-28"
    },
    {
      name: "Debate Society",
      image: "🎤",
      vacancies: 10,
      applicants: 25,
      deadline: "2025-09-21"
    }
  ];

  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending': return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'selected': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'rejected': return <XCircle className="w-5 h-5 text-red-500" />;
      default: return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'selected': return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-slate-900 text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold">My Dashboard</h1>
          </div>
          <div className="text-sm text-slate-300">Track your club applications</div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">3</div>
              <div className="text-sm text-gray-600">Total Applications</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">1</div>
              <div className="text-sm text-gray-600">Pending</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">1</div>
              <div className="text-sm text-gray-600">Selected</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">1</div>
              <div className="text-sm text-gray-600">Not Selected</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* My Applications */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-slate-900">My Applications</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {myApplications.map((application) => (
                    <div key={application.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="text-3xl">{application.clubImage}</div>
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900">{application.clubName}</h3>
                            <p className="text-sm text-gray-600">Applied on {application.appliedDate}</p>
                          </div>
                        </div>
                        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border text-sm font-medium ${getStatusColor(application.status)}`}>
                          {getStatusIcon(application.status)}
                          <span>{application.status.charAt(0).toUpperCase() + application.status.slice(1)}</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-medium text-gray-700">Current Stage</span>
                        </div>
                        <p className="text-sm text-gray-600">{application.stage}</p>
                        <p className="text-xs text-gray-500 mt-1">Last updated: {application.lastUpdate}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Vacancies: </span>
                          <span className="font-medium text-teal-600">{application.vacancies}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Total Applicants: </span>
                          <span className="font-medium text-blue-600">{application.totalApplicants}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Available Clubs Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-slate-900">Still Recruiting</h2>
                <p className="text-sm text-gray-600 mt-1">Clubs you can still apply to</p>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {availableClubs.map((club, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="text-2xl">{club.image}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 text-sm">{club.name}</h3>
                          <p className="text-xs text-red-600">Deadline: {club.deadline}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                        <div>
                          <span className="text-gray-600">Vacancies: </span>
                          <span className="font-medium text-teal-600">{club.vacancies}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Applicants: </span>
                          <span className="font-medium text-blue-600">{club.applicants}</span>
                        </div>
                      </div>
                      
                      <button className="w-full bg-teal-600 text-white py-2 px-3 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2 text-sm">
                        <Plus className="w-4 h-4" />
                        <span>Apply Now</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-xl mt-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-slate-900">Quick Actions</h2>
              </div>
              <div className="p-6 space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <span>Browse All Clubs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                  Update Profile
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                  Help & Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentStatusDashboard;