// src/data/users.js

export const students = [
  {
    id: 'student1',
    email: 'student@test.com',
    password: 'password',
    name: 'Arjun Sharma',
    year: '2nd Year',
    branch: 'Computer Science',
    rollNumber: 'CS21B001',
    phone: '+91 9876543210'
  },
  {
    id: 'student2',
    email: 'priya@test.com',
    password: 'password',
    name: 'Priya Patel',
    year: '3rd Year',
    branch: 'Electronics',
    rollNumber: 'EC20B015',
    phone: '+91 9876543211'
  }
];

export const admins = [
  {
    id: 'admin1',
    email: 'admin@tech.com',
    password: 'password',
    name: 'Tech Club Admin',
    clubId: 1,
    clubName: 'Tech Innovators Club'
  },
  {
    id: 'admin2',
    email: 'admin@arts.com',
    password: 'password',
    name: 'Arts Admin',
    clubId: 2,
    clubName: 'Creative Arts Society'
  },
  {
    id: 'admin3',
    email: 'admin@business.com',
    password: 'password',
    name: 'Business Admin',
    clubId: 3,
    clubName: 'Business Analytics Club'
  },
  {
    id: 'admin4',
    email: 'admin@env.com',
    password: 'password',
    name: 'Environment Admin',
    clubId: 4,
    clubName: 'Environmental Action Group'
  },
  {
    id: 'admin5',
    email: 'admin@photo.com',
    password: 'password',
    name: 'Photo Admin',
    clubId: 5,
    clubName: 'Photography Club'
  },
  {
    id: 'admin6',
    email: 'admin@debate.com',
    password: 'password',
    name: 'Debate Admin',
    clubId: 6,
    clubName: 'Debate Society'
  }
];

// Authentication helper
export const authenticateUser = (email, password, userType) => {
  const users = userType === 'student' ? students : admins;
  const user = users.find(u => u.email === email && u.password === password);
  return user || null;
};

// Test credentials for demo:
/*
STUDENTS:
- Email: student@test.com, Password: password
- Email: priya@test.com, Password: password

ADMINS:
- Email: admin@tech.com, Password: password (Tech Club)
- Email: admin@arts.com, Password: password (Arts Society)
- Email: admin@business.com, Password: password (Business Club)
- Email: admin@env.com, Password: password (Environmental Group)
- Email: admin@photo.com, Password: password (Photography Club)
- Email: admin@debate.com, Password: password (Debate Society)
*/