import React, { useState } from 'react';
import { User, Search, Calendar, Users, MapPin, ArrowRight, Star, Clock } from 'lucide-react';

const StudentDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const clubs = [
    {
      id: 1,
      name: "Tech Innovators Club",
      category: "Technology",
      description: "Building tomorrow's technology today. Join us for coding competitions, hackathons, and tech talks.",
      vacancies: 15,
      applicants: 45,
      deadline: "2025-09-25",
      rating: 4.8,
      image: "🚀",
      tags: ["Coding", "AI/ML", "Web Dev"]
    },
    {
      id: 2,
      name: "Creative Arts Society",
      category: "Arts",
      description: "Express your creativity through various art forms including painting, sculpture, and digital art.",
      vacancies: 20,
      applicants: 32,
      deadline: "2025-09-22",
      rating: 4.6,
      image: "🎨",
      tags: ["Painting", "Digital Art", "Sculpture"]
    },
    {
      id: 3,
      name: "Business Analytics Club",
      category: "Business",
      description: "Dive into data-driven decision making and learn cutting-edge analytics tools.",
      vacancies: 12,
      applicants: 28,
      deadline: "2025-09-20",
      rating: 4.7,
      image: "📊",
      tags: ["Analytics", "Finance", "Strategy"]
    },
    {
      id: 4,
      name: "Environmental Action Group",
      category: "Social Impact",
      description: "Making a difference in environmental conservation through action and awareness.",
      vacancies: 25,
      applicants: 38,
      deadline: "2025-09-28",
      rating: 4.9,
      image: "🌱",
      tags: ["Sustainability", "Conservation", "Community"]
    },
    {
      id: 5,
      name: "Photography Club",
      category: "Arts",
      description: "Capture moments and tell stories through the lens. From portraits to landscapes.",
      vacancies: 18,
      applicants: 42,
      deadline: "2025-09-24",
      rating: 4.5,
      image: "📸",
      tags: ["Photography", "Editing", "Visual Arts"]
    },
    {
      id: 6,
      name: "Debate Society",
      category: "Literature",
      description: "Sharpen your argumentation skills and engage in intellectual discussions.",
      vacancies: 10,
      applicants: 25,
      deadline: "2025-09-21",
      rating: 4.4,
      image: "🎤",
      tags: ["Public Speaking", "Critical Thinking", "Research"]
    }
  ];

  const filteredClubs = clubs.filter(club =>
    club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    club.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApply = (clubName) => {
    alert(`Opening application form for ${clubName}...`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-slate-900 text-white px-6 py-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold">ClubConnect</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-slate-300">Welcome back, Student!</div>
            <button className="bg-teal-600 px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm">
              My Applications
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Discover Your Perfect Club
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join amazing clubs and unlock opportunities to grow, learn, and connect with like-minded peers.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search clubs by name or category..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClubs.map((club) => (
            <div key={club.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Club Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{club.image}</div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-600">{club.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{club.name}</h3>
                <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full mb-3">
                  {club.category}
                </div>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">{club.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {club.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="px-6 pb-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-teal-600">{club.vacancies}</div>
                    <div className="text-xs text-gray-500">Vacancies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{club.applicants}</div>
                    <div className="text-xs text-gray-500">Applicants</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-red-600 flex items-center justify-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {new Date(club.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    <div className="text-xs text-gray-500">Deadline</div>
                  </div>
                </div>
              </div>

              {/* Apply Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleApply(club.name)}
                  className="w-full bg-teal-600 text-white py-3 px-4 rounded-xl hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2 font-semibold"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredClubs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No clubs found</h3>
            <p className="text-gray-500">Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;