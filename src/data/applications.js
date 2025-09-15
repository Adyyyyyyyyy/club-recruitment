// src/data/applications.js

export const applications = [
  {
    id: 1,
    studentId: 'student1',
    studentName: "Arjun Sharma",
    email: "arjun@student.edu",
    phone: "+91 9876543210",
    year: "2nd Year",
    branch: "Computer Science",
    rollNumber: "CS21B001",
    clubId: 1,
    clubName: "Tech Innovators Club",
    appliedDate: "2025-09-10",
    status: "pending",
    lastUpdate: "2025-09-12",
    stage: "Under Review",
    formData: {
      motivation: "I am passionate about technology and innovation. I want to contribute to building cutting-edge solutions that can make a real impact on society.",
      experience: "Built 3 web applications, participated in 2 hackathons, internship at startup",
      skills: "Python, React, Machine Learning, Node.js",
      portfolio: "https://github.com/arjunsharma",
      availability: "10-15 hours"
    }
  },
  {
    id: 2,
    studentId: 'student2',
    studentName: "Priya Patel",
    email: "priya@student.edu",
    phone: "+91 9876543211",
    year: "3rd Year",
    branch: "Electronics",
    rollNumber: "EC20B015",
    clubId: 1,
    clubName: "Tech Innovators Club",
    appliedDate: "2025-09-08",
    status: "selected",
    lastUpdate: "2025-09-14",
    stage: "Selected - Welcome Email Sent",
    formData: {
      motivation: "Love building tech solutions that make a difference in people's lives.",
      experience: "IoT projects, Arduino programming, web development",
      skills: "JavaScript, Node.js, Arduino, C++",
      portfolio: "https://priyapatel.dev",
      availability: "15+ hours"
    }
  },
  {
    id: 3,
    studentId: 'student3',
    studentName: "Rahul Kumar",
    email: "rahul@student.edu",
    phone: "+91 9876543212",
    year: "1st Year",
    branch: "Computer Science",
    rollNumber: "CS24B032",
    clubId: 2,
    clubName: "Photography Club",
    appliedDate: "2025-09-05",
    status: "rejected",
    lastUpdate: "2025-09-13",
    stage: "Application Reviewed",
    formData: {
      motivation: "Photography has been my passion since school. I want to learn professional techniques.",
      experience: "Personal photography, social media content creation",
      skills: "Basic Photoshop, Mobile photography",
      portfolio: "https://instagram.com/rahul_clicks",
      availability: "5-10 hours"
    }
  },
  {
    id: 4,
    studentId: 'student1',
    studentName: "Arjun Sharma",
    email: "arjun@student.edu",
    phone: "+91 9876543210",
    year: "2nd Year",
    branch: "Computer Science",
    rollNumber: "CS21B001",
    clubId: 5,
    clubName: "Photography Club",
    appliedDate: "2025-09-11",
    status: "pending",
    lastUpdate: "2025-09-12",
    stage: "Application Submitted",
    formData: {
      motivation: "Want to explore the creative side of technology through photography.",
      experience: "Tech event photography, product shoots",
      skills: "Lightroom, Photoshop, DSLR handling",
      portfolio: "https://arjunphotography.com",
      availability: "5-10 hours"
    }
  }
];

// Helper functions
export const getApplicationsByClub = (clubId) => {
  return applications.filter(app => app.clubId === clubId);
};

export const getApplicationsByStudent = (studentId) => {
  return applications.filter(app => app.studentId === studentId);
};

export const getApplicationById = (id) => {
  return applications.find(app => app.id === parseInt(id));
};

export const updateApplicationStatus = (id, newStatus) => {
  const app = applications.find(app => app.id === parseInt(id));
  if (app) {
    app.status = newStatus;
    app.lastUpdate = new Date().toISOString().split('T')[0];
    return app;
  }
  return null;
};