export const clubs = [
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
    tags: ["Coding", "AI/ML", "Web Dev"],
    isRecruiting: true
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
    tags: ["Painting", "Digital Art", "Sculpture"],
    isRecruiting: true
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
    tags: ["Analytics", "Finance", "Strategy"],
    isRecruiting: true
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
    tags: ["Sustainability", "Conservation", "Community"],
    isRecruiting: true
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
    tags: ["Photography", "Editing", "Visual Arts"],
    isRecruiting: true
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
    tags: ["Public Speaking", "Critical Thinking", "Research"],
    isRecruiting: true
  }
];

export const getClubById = (id) => {
  return clubs.find(club => club.id === parseInt(id));
};

export const getActiveClubs = () => {
  return clubs.filter(club => club.isRecruiting);
};